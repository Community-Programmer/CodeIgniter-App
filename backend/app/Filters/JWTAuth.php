<?php
namespace App\Filters;

use CodeIgniter\Filters\FilterInterface;
use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class JWTAuth implements FilterInterface
{
    public function before(RequestInterface $request, $arguments = null)
    {
        $authHeader = $request->getHeader('Authorization');
        if (!$authHeader) {
            return service('response')->setJSON([
                'status' => 'error',
                'message' => 'Authorization header required'
            ])->setStatusCode(401);
        }

        $token = null;
        if (preg_match('/Bearer\s(\S+)/', $authHeader->getValue(), $matches)) {
            $token = $matches[1];
        }

        if (!$token) {
            return service('response')->setJSON([
                'status' => 'error',
                'message' => 'Token not found'
            ])->setStatusCode(401);
        }

        try {
            $key = getenv('JWT_SECRET') ?: 'your_fallback_secret_key';
            $decoded = JWT::decode($token, new Key($key, 'HS256'));
            
            // Store decoded token in request for later use
            $request->user = $decoded;
        } catch (\Exception $e) {
            return service('response')->setJSON([
                'status' => 'error',
                'message' => 'Invalid token: ' . $e->getMessage()
            ])->setStatusCode(401);
        }
    }

    public function after(RequestInterface $request, ResponseInterface $response, $arguments = null)
    {
        // Do something here after the controller executes
    }
}