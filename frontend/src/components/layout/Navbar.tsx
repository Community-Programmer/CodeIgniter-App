import { useAuth } from '../../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav className="bg-blue-600 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 text-xl font-bold">
                        <Link to="/" className="hover:text-gray-200">
                            Teacher Portal
                        </Link>
                    </div>

                    {/* Links */}
                    <div className="flex items-center space-x-6">
                        {currentUser ? (
                            <>
                                <Link
                                    to="/teacher-form"
                                    className="hover:text-gray-200 transition-colors"
                                >
                                    Create Teacher
                                </Link>
                                <Link
                                    to="/users"
                                    className="hover:text-gray-200 transition-colors"
                                >
                                    Users
                                </Link>
                                <Link
                                    to="/teachers"
                                    className="hover:text-gray-200 transition-colors"
                                >
                                    Teachers
                                </Link>
                                <span className="hidden sm:inline-block">
                                    Welcome, <span className="font-semibold">{currentUser.first_name} {currentUser.last_name}</span>
                                </span>
                                <button
                                    onClick={handleLogout}
                                    className="bg-white text-blue-600 px-3 py-1 rounded-lg hover:bg-gray-100 transition"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/login"
                                    className="hover:text-gray-200 transition-colors"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/register"
                                    className="hover:text-gray-200 transition-colors"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
