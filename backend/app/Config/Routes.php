<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');

$routes->post('register', 'AuthController::register');
$routes->post('login', 'AuthController::login');
$routes->post('teacher', 'TeacherController::create', ['filter' => 'jwtAuth']);
$routes->get('users', 'UserController::index');
$routes->get('teachers', 'TeacherController::index');

$routes->options('(:any)', function() {
    $response = service('response');
    return $response->setStatusCode(200);
});