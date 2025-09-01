<?php
namespace App\Controllers;

use App\Models\UserModel;
use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;
use Firebase\JWT\JWT;

class AuthController extends ResourceController
{
    use ResponseTrait;

    public function register()
    {
        $model = new UserModel();
        $data = $this->request->getJSON(true);
        
        // Validate input
        if (!isset($data['email']) || !isset($data['password']) || 
            !isset($data['first_name']) || !isset($data['last_name'])) {
            return $this->failValidationErrors('Email, password, first name, and last name are required');
        }
        
        // Check if email already exists
        if ($model->emailExists($data['email'])) {
            return $this->failValidationErrors('Email already registered');
        }
        
        try {
            if ($model->save($data)) {
                return $this->respondCreated(['message' => 'User created successfully']);
            }
            
            return $this->failValidationErrors($model->errors());
        } catch (\Exception $e) {
            return $this->failServerError('Server error: ' . $e->getMessage());
        }
    }

    public function login()
    {
        $model = new UserModel();
        $data = $this->request->getJSON(true);

        // Validate required fields
        if (!isset($data['email']) || !isset($data['password'])) {
            return $this->failValidationErrors('Email and password are required');
        }

        try {
            $user = $model->where('email', $data['email'])->first();

            if (!$user || !password_verify($data['password'], $user['password'])) {
                return $this->failUnauthorized('Invalid email or password');
            }

            $key = getenv('JWT_SECRET');
            $payload = [
                'iss' => base_url(),
                'aud' => base_url(),
                'sub' => $user['id'],
                'email' => $user['email'],
                'iat' => time(),
                'exp' => time() + 3600
            ];

            $token = JWT::encode($payload, $key, 'HS256');

            return $this->respond([
                'message' => 'Login successful',
                'token' => $token,
                'user' => [
                    'id' => $user['id'],
                    'email' => $user['email'],
                    'first_name' => $user['first_name'],
                    'last_name' => $user['last_name']
                ]
            ]);
        } catch (\Exception $e) {
            return $this->failServerError('Server error: ' . $e->getMessage());
        }
    }
}