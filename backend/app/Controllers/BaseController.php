<?php
namespace App\Controllers;

use CodeIgniter\Controller;

class BaseController extends Controller
{
    protected function setCorsHeaders()
    {
        $allowedOrigin = getenv('cors.allowOrigin') ?: 'http://localhost:5174';
        
        $this->response
            ->setHeader('Access-Control-Allow-Origin', $allowedOrigin)
            ->setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token, Authorization, X-Requested-With, Accept')
            ->setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS')
            ->setHeader('Access-Control-Allow-Credentials', 'true')
            ->setHeader('Access-Control-Max-Age', '86400');
    }
    
    public function initController(\CodeIgniter\HTTP\RequestInterface $request, \CodeIgniter\HTTP\ResponseInterface $response, \Psr\Log\LoggerInterface $logger)
    {
        parent::initController($request, $response, $logger);
        
        // Set CORS headers for all responses
        $this->setCorsHeaders();
        
        // Handle preflight requests
        if ($request->getMethod() === 'options') {
            $this->response->setStatusCode(200);
            exit();
        }
    }
}