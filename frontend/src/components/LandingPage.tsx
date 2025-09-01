import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 flex flex-col items-center justify-center p-6">
            <div className="max-w-2xl w-full bg-white/80 rounded-3xl shadow-2xl p-10 flex flex-col items-center gap-8 border border-blue-200">
                <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 text-center drop-shadow-lg">
                    Welcome to <span className="text-purple-600">EduTask</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-700 text-center max-w-xl">
                    Effortlessly manage teachers, students, and tasks with a modern, intuitive platform. Secure, fast, and designed for educators and admins.
                </p>
                <div className="flex flex-col md:flex-row gap-4 w-full justify-center">
                    <Link to="/login" className="w-full md:w-auto">
                        <button className="w-full px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg shadow transition-all duration-200">
                            Login
                        </button>
                    </Link>
                    <Link to="/register" className="w-full md:w-auto">
                        <button className="w-full px-8 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-lg shadow transition-all duration-200">
                            Register
                        </button>
                    </Link>
                </div>
            </div>
            <footer className="mt-10 text-gray-400 text-sm text-center">
                &copy; {new Date().getFullYear()} EduTask. All rights reserved.
            </footer>
        </div>
    );
};

export default LandingPage;
