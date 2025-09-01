# React Frontend

A modern React frontend designed to work seamlessly with the CodeIgniter 4 backend API. This app provides a beautiful UI for user and teacher management, authentication, and more.

---

## 🚀 Features

- **User Authentication**: Register and login with JWT-based authentication.
- **User Management**: View all users in a clean, responsive table.
- **Teacher Management**: Create and view teachers, with forms and lists.
- **Protected Routes**: Secure pages using React context and route guards.
- **Reusable UI Components**: Styled buttons, cards, alerts, inputs, and selects.
- **Context API**: Global authentication state management.
- **API Integration**: All data is fetched from the backend via a typed API service.
- **Vite + TypeScript**: Fast development, type safety, and modern tooling.
- **Responsive Design**: Works great on desktop and mobile.

---

## 📂 Project Structure

```
frontend/
├── public/                # Static assets
├── src/
│   ├── assets/            # Images and SVGs
│   ├── components/        # UI and feature components
│   │   ├── layout/        # Navbar, ProtectedRoute
│   │   └── ui/            # Button, Card, Input, etc.
│   ├── contexts/          # React Contexts (Auth)
│   ├── lib/               # Utility functions
│   ├── services/          # API service (axios)
│   ├── types/             # TypeScript types
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── ...
├── package.json           # NPM dependencies
├── tsconfig.json          # TypeScript config
├── vite.config.ts         # Vite config
└── README.md              # This file
```

---

## 🛠️ Setup & Installation

1. **Navigate to the frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   The app will be available at [http://localhost:5174](http://localhost:5174) (or the port shown in your terminal).

---

## 🔗 Backend Integration
- The frontend is configured to communicate with the backend API at `http://localhost:8080` by default (see `src/services/api.ts`).
- Make sure the backend is running and CORS is enabled for your frontend's port.
- All authentication and data requests are handled via the API service.

---

## 📚 Main Components

- **LandingPage**: Welcome screen for the app.
- **Login & Register**: Forms for authentication.
- **UserList**: Table of all users.
- **TeacherForm**: Form to create a new teacher.
- **TeacherList**: Table of all teachers.
- **Navbar**: Top navigation bar.
- **ProtectedRoute**: Guards private routes.
- **UI Components**: Button, Card, Input, Select, Alert, etc.

---

## 📝 Customization
- Update `src/services/api.ts` to change the backend API URL.
- Add or modify components in `src/components/` as needed.
- Style the app by editing `App.css` or component-specific CSS.

---

## 🤝 Contributing
Pull requests and issues are welcome! Please open an issue to discuss your ideas or report bugs.

---

## 📄 License
This project is open source and available under the MIT License.

---

## 🙏 Acknowledgements
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [CodeIgniter 4](https://codeigniter.com/)

---

> _Happy coding!_
