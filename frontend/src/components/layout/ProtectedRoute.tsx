import { useAuth } from '../../contexts/AuthContext';
import { Navigate } from 'react-router-dom';


import type { ReactNode } from 'react';

interface ProtectedRouteProps {
    children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const { currentUser } = useAuth();
    console.log("ProtectedRoute - currentUser:", currentUser);
    return currentUser ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;