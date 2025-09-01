<?php
namespace App\Controllers;

use App\Models\UserModel;
use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;

class UserController extends ResourceController
{
    use ResponseTrait;

    public function index()
    {
        $model = new UserModel();
        $users = $model->findAll();
        return $this->respond($users);
    }
}
