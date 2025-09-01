<?php
namespace App\Models;
use CodeIgniter\Model;

class TeacherModel extends Model {
    protected $table = 'teachers';
    protected $primaryKey = 'id';
    protected $useAutoIncrement = true;
    protected $returnType = 'array';
    protected $allowedFields = ['user_id', 'university_name', 'gender', 'year_joined'];
    protected $useTimestamps = true;
    protected $createdField = 'created_at';
    protected $updatedField = 'updated_at';
    
    protected $validationRules = [
        'user_id' => 'required|is_not_unique[auth_user.id]',
        'university_name' => 'required|min_length[3]|max_length[255]',
        'gender' => 'required|in_list[Male,Female,Other]',
        'year_joined' => 'required|integer|greater_than[1900]|less_than_equal_to[2099]'
    ];
}