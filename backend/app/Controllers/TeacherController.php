<?php
namespace App\Controllers;

use App\Models\UserModel;
use App\Models\TeacherModel;
use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class TeacherController extends ResourceController
{
    use ResponseTrait;

    // GET /teachers
    public function index()
    {
        $builder = (new TeacherModel())->db->table('teachers');
        $builder->select('teachers.*, auth_user.email, auth_user.first_name, auth_user.last_name');
        $builder->join('auth_user', 'auth_user.id = teachers.user_id');
        $teachers = $builder->get()->getResultArray();
        return $this->respond($teachers);
    }
    use ResponseTrait;

    /**
     * Single API endpoint to create both user and teacher records
     * Protected with JWT authentication
     */
    public function create()
    {
        // Check for JWT token in the Authorization header
        $authHeader = $this->request->getHeader('Authorization');
        if (!$authHeader) {
            return $this->failUnauthorized('Authorization header required');
        }

        $token = null;
        if (preg_match('/Bearer\s(\S+)/', $authHeader->getValue(), $matches)) {
            $token = $matches[1];
        }

        if (!$token) {
            return $this->failUnauthorized('Token not found');
        }

        try {
            // Validate JWT token
            $key = getenv('JWT_SECRET');
            $decoded = JWT::decode($token, new Key($key, 'HS256'));
            
            // Token is valid, proceed with teacher creation
            $userModel = new UserModel();
            $teacherModel = new TeacherModel();
            $data = $this->request->getJSON(true);
            
            // Validate all required fields for both tables
            $requiredFields = [
                // User fields
                'email', 'password', 'first_name', 'last_name',
                // Teacher fields
                'university_name', 'gender', 'year_joined'
            ];
            
            foreach ($requiredFields as $field) {
                if (!isset($data[$field]) || empty($data[$field])) {
                    return $this->failValidationErrors("Field $field is required");
                }
            }
            
            // Check if email already exists
            if ($userModel->emailExists($data['email'])) {
                return $this->failValidationErrors('Email already registered');
            }
            
            // Start database transaction
            $db = db_connect();
            $db->transStart();
            
            // Prepare user data
            $userData = [
                'email' => $data['email'],
                'password' => $data['password'],
                'first_name' => $data['first_name'],
                'last_name' => $data['last_name']
            ];
            
            // Insert user data
            $userId = $userModel->insert($userData);
            
            if (!$userId) {
                $db->transRollback();
                return $this->failValidationErrors($userModel->errors());
            }
            
            // Prepare teacher data
            $teacherData = [
                'user_id' => $userId,
                'university_name' => $data['university_name'],
                'gender' => $data['gender'],
                'year_joined' => $data['year_joined']
            ];
            
            // Insert teacher data
            if (!$teacherModel->insert($teacherData)) {
                $db->transRollback();
                return $this->failValidationErrors($teacherModel->errors());
            }
            
            // Commit transaction
            $db->transComplete();
            
            return $this->respondCreated([
                'message' => 'User and teacher records created successfully',
                'user_id' => $userId
            ]);
            
        } catch (\Exception $e) {
            // Handle JWT validation errors
            if (strpos($e->getMessage(), 'JWT') !== false) {
                return $this->failUnauthorized('Invalid token: ' . $e->getMessage());
            }
            
            // Handle other errors
            if (isset($db) && $db->transStatus() !== false) {
                $db->transRollback();
            }
            return $this->failServerError('Server error: ' . $e->getMessage());
        }
    }
}