import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import './index.css';
import Navbar from './components/layout/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import ProtectedRoute from './components/layout/ProtectedRoute';
import TeacherForm from './components/TeacherForm';
import UserList from './components/UserList';
import TeacherList from './components/TeacherList';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Navbar />
          <div>
            <Routes>
              <Route path="/" element={<Navigate to="/login" />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/teacher-form"
                element={
                  <ProtectedRoute>
                    <TeacherForm />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/users"
                element={
                  <ProtectedRoute>
                    <UserList />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/teachers"
                element={
                  <ProtectedRoute>
                    <TeacherList />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;