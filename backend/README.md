# App Backend (CodeIgniter 4)

A modern backend API built with CodeIgniter 4, designed for seamless integration with a React frontend. This app provides robust user and teacher management, JWT authentication, and secure, scalable architecture.


<img width="1897" height="907" alt="image" src="https://github.com/user-attachments/assets/f6366f31-e2fe-422c-865d-b8325ff5c616" />

---

## 🚀 Features

- **User Management**: Register, login, and list users with secure password hashing.
- **Teacher Management**: Create and list teachers, each linked to a user account. Teacher data is joined with user info for easy access.
- **JWT Authentication**: Secure endpoints with JSON Web Tokens.
- **CORS Support**: Configured for React development (localhost:3000, localhost:5174) and easy production changes.
- **RESTful API**: Clean, resource-oriented endpoints for frontend consumption.
- **PostgreSQL Database**: Relational data with migrations and constraints.
- **Environment-based Config**: All sensitive credentials are loaded from `.env`.
- **Modern UI Welcome Page**: Custom dashboard for quick project overview.

---

## 📂 Project Structure

```
backend/
├── app/
│   ├── Config/         # App configuration (CORS, Filters, Database, etc.)
│   ├── Controllers/    # API controllers (User, Teacher, Auth)
│   ├── Models/         # Eloquent models for User and Teacher
│   ├── Views/          # Welcome page and error views
│   └── ...
├── public/             # Public web root (index.php)
├── writable/           # Logs, cache, uploads
├── vendor/             # Composer dependencies
├── .env                # Environment variables (not committed)
├── composer.json       # PHP dependencies
└── README.md           # This file
```

---

## 🛠️ Setup & Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd backend
   ```

2. **Install dependencies**
   ```bash
   composer install
   ```

3. **Copy and edit the environment file**
   ```bash
   cp .env.example .env
   # Edit .env with your DB and JWT credentials
   ```

4. **Set up your database**
   - Create a PostgreSQL database and user.
   - Update `.env` with your DB credentials.
   - Run migrations (if available) or use the provided SQL schema.

5. **Run the development server**
   ```bash
   php spark serve
   ```
   The app will be available at [http://localhost:8080](http://localhost:8080)

---

## 🔑 Environment Variables

Set these in your `.env` file:
```
DB_HOSTNAME=localhost
DB_USERNAME=your_db_user
DB_PASSWORD=your_db_password
DB_DATABASE=your_db_name
DB_DRIVER=Postgre
DB_PORT=5432
JWT_SECRET=your_jwt_secret
```

---

## 📚 API Endpoints

### Auth
- `POST /register` — Register a new user
- `POST /login` — Login and receive JWT

### Users
- `GET /users` — List all users

### Teachers
- `POST /teacher` — Create a teacher (JWT required)
- `GET /teachers` — List all teachers with user info

---

## 🔒 Security & Best Practices
- All sensitive data is loaded from environment variables.
- CORS is enabled and configurable in `app/Config/Cors.php`.
- Passwords are hashed before storage.
- JWT is used for authentication on protected routes.
- Database constraints ensure data integrity.

---

## 🖥️ Frontend Integration
- Designed for seamless use with a React frontend (default CORS for localhost:3000 and localhost:5174).
- All endpoints return JSON for easy consumption.

---

## 📝 Customization
- Update `app/Config/Cors.php` to change allowed origins.
- Edit `app/Views/welcome_message.php` for your own dashboard.
- Add more models/controllers as your app grows.

---

## 🤝 Contributing
Pull requests and issues are welcome! Please open an issue to discuss your ideas or report bugs.

---

## 📄 License
This project is open source and available under the MIT License.

---

## 🙏 Acknowledgements
- [CodeIgniter 4](https://codeigniter.com/)
- [React](https://react.dev/)
- [PostgreSQL](https://www.postgresql.org/)

---

> _Happy coding!_
