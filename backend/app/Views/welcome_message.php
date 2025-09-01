<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>App Dashboard</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" type="image/png" href="/favicon.ico">
    <style>
        body {
            font-family: 'Segoe UI', Arial, sans-serif;
            background: #f6f8fa;
            margin: 0;
            color: #222;
        }
        .navbar {
            background: #22223b;
            color: #fff;
            padding: 1rem 2rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .navbar h1 {
            margin: 0;
            font-size: 2rem;
            letter-spacing: 2px;
        }
        .navbar nav a {
            color: #fff;
            text-decoration: none;
            margin-left: 2rem;
            font-weight: 500;
            transition: color 0.2s;
        }
        .navbar nav a:hover {
            color: #fca311;
        }
        .container {
            max-width: 900px;
            margin: 2rem auto;
            background: #fff;
            border-radius: 12px;
            box-shadow: 0 2px 16px rgba(0,0,0,0.07);
            padding: 2.5rem 2rem;
        }
        .hero {
            text-align: center;
            margin-bottom: 2.5rem;
        }
        .hero h2 {
            color: #22223b;
            font-size: 2.2rem;
            margin-bottom: 0.5rem;
        }
        .hero p {
            color: #4a4e69;
            font-size: 1.1rem;
        }
        .features {
            display: flex;
            flex-wrap: wrap;
            gap: 2rem;
            justify-content: center;
        }
        .feature {
            background: #fca311;
            color: #fff;
            border-radius: 10px;
            padding: 2rem 1.5rem;
            flex: 1 1 250px;
            min-width: 220px;
            max-width: 300px;
            box-shadow: 0 2px 8px rgba(252,163,17,0.08);
            text-align: center;
        }
        .feature h3 {
            margin-top: 0;
            font-size: 1.3rem;
        }
        .feature p {
            font-size: 1rem;
        }
        .footer {
            text-align: center;
            color: #888;
            margin: 2rem 0 1rem 0;
            font-size: 0.95rem;
        }
        @media (max-width: 700px) {
            .features {
                flex-direction: column;
                gap: 1.5rem;
            }
            .container {
                padding: 1.2rem 0.5rem;
            }
        }
    </style>
</head>
<body>
    <div class="navbar">
        <h1>App Dashboard</h1>
    </div>
    <div class="container">
        <div class="hero">
            <h2>Welcome to Teacher Api Backend</h2>
            <p>Manage users and teachers, and connect your React frontend with this modern API backend.</p>
        </div>
        <div class="features">
            <div class="feature">
                <h3>User Management</h3>
                <p>Register, login, and view all users. Secure authentication with JWT.</p>
            </div>
            <div class="feature">
                <h3>Teacher Management</h3>
                <p>Create and view teachers, linked to user accounts. All data is joined for easy access.</p>
            </div>
            <div class="feature">
                <h3>API Ready</h3>
                <p>Connect your React frontend to these endpoints for a seamless full-stack experience.</p>
            </div>
        </div>
    </div>
    <div class="footer">
        &copy; <?= date('Y') ?> Your App. Powered by CodeIgniter 4.
    </div>
</body>
</html>
