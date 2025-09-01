<?php
namespace App\Models;
use CodeIgniter\Model;

class UserModel extends Model {
    protected $table = 'auth_user';
    protected $allowedFields = ['email', 'first_name', 'last_name', 'password'];
    protected $beforeInsert = ['hashPassword'];

    protected function hashPassword(array $data) {
        if (isset($data['data']['password']))
            $data['data']['password'] = password_hash($data['data']['password'], PASSWORD_DEFAULT);
        return $data;
    }
}