# React Frontend

A modern React frontend designed to work seamlessly with the CodeIgniter 4 backend API. This app provides a beautiful UI for user and teacher management, authentication, and more.

<img width="1895" height="906" alt="image" src="https://github.com/user-attachments/assets/220a0c69-df01-47dd-8ab5-5e1de1bba0b7" />
<img width="1898" height="905" alt="image" src="https://github.com/user-attachments/assets/a7eef1c6-3afe-4a8f-9b57-6d1b041da314" />
<img width="1896" height="906" alt="image" src="https://github.com/user-attachments/assets/3a1ab25b-be8b-4ac0-bc61-6bb5a83eda4b" />
<img width="1895" height="911" alt="image" src="https://github.com/user-attachments/assets/87345fa7-4d07-4c88-849a-01ad2587a359" />
<img width="1918" height="905" alt="image" src="https://github.com/user-attachments/assets/ccb5d387-734d-430b-9f0f-0399ebab9aff" />
<img width="1917" height="897" alt="image" src="https://github.com/user-attachments/assets/61523d5e-b7b8-473c-a7c6-03aff2fca0b8" />

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
