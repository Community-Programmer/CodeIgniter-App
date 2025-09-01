# Full Stack App: React + CodeIgniter 4

A modern full-stack application featuring a React frontend and a CodeIgniter 4 backend. This project provides robust user and teacher management, JWT authentication, PostgreSQL integration, and a beautiful UI for seamless user experience.

<img width="1897" height="907" alt="image" src="https://github.com/user-attachments/assets/f6366f31-e2fe-422c-865d-b8325ff5c616" />
<img width="1895" height="906" alt="image" src="https://github.com/user-attachments/assets/220a0c69-df01-47dd-8ab5-5e1de1bba0b7" />
<img width="1898" height="905" alt="image" src="https://github.com/user-attachments/assets/a7eef1c6-3afe-4a8f-9b57-6d1b041da314" />
<img width="1896" height="906" alt="image" src="https://github.com/user-attachments/assets/3a1ab25b-be8b-4ac0-bc61-6bb5a83eda4b" />
<img width="1895" height="911" alt="image" src="https://github.com/user-attachments/assets/87345fa7-4d07-4c88-849a-01ad2587a359" />
<img width="1918" height="905" alt="image" src="https://github.com/user-attachments/assets/ccb5d387-734d-430b-9f0f-0399ebab9aff" />
<img width="1917" height="897" alt="image" src="https://github.com/user-attachments/assets/61523d5e-b7b8-473c-a7c6-03aff2fca0b8" />


---

## 🏗️ Project Structure

```
app-task/
├── backend/   # CodeIgniter 4 API backend
├── frontend/  # React frontend
└── README.md  # (this file)
```

---

## 🔥 Features

- **User Authentication**: Register and login with JWT-based authentication.
- **User Management**: Create, view, and manage users.
- **Teacher Management**: Create and view teachers, linked to user accounts.
- **RESTful API**: Clean, resource-oriented endpoints.
- **CORS Support**: Out-of-the-box support for local React development.
- **PostgreSQL Database**: Relational data with migrations and constraints.
- **Modern UI**: Responsive, accessible, and easy to use.
- **Environment-based Config**: All sensitive credentials are loaded from `.env` files.

---

## ⚙️ Setup & Installation

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd app-task
```

### 2. Backend Setup (CodeIgniter 4)
```bash
cd backend
composer install
cp .env.example .env  # or create .env manually
# Edit .env with your DB and JWT credentials
php spark serve
```
- The backend will run at [http://localhost:8080](http://localhost:8080)

### 3. Frontend Setup (React + Vite)
```bash
cd ../frontend
npm install
npm run dev
```
- The frontend will run at [http://localhost:5174](http://localhost:5174) (or the port shown in your terminal)

---

## 🔑 Environment Variables

### Backend (`backend/.env`)
```
DB_HOSTNAME=localhost
DB_USERNAME=your_db_user
DB_PASSWORD=your_db_password
DB_DATABASE=your_db_name
DB_DRIVER=Postgre
DB_PORT=5432
JWT_SECRET=your_jwt_secret
```

### Frontend
- API base URL is set in `src/services/api.ts` (default: `http://localhost:8080`).

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

## 🖥️ Main Frontend Components
- **LandingPage**: Welcome screen
- **Login & Register**: Authentication forms
- **UserList**: Table of all users
- **TeacherForm**: Create a new teacher
- **TeacherList**: Table of all teachers
- **Navbar**: Top navigation
- **ProtectedRoute**: Guards private routes
- **UI Components**: Button, Card, Input, Select, Alert, etc.

---

## 📝 Customization
- Update backend CORS in `backend/app/Config/Cors.php` for allowed origins.
- Change API base URL in `frontend/src/services/api.ts` if needed.
- Add more models/controllers/components as your app grows.

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
- [Vite](https://vitejs.dev/)
- [PostgreSQL](https://www.postgresql.org/)

---

> _Happy coding!_
