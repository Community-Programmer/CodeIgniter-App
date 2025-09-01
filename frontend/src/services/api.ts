import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

// Add token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handle token expiration
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
    return Promise.reject(error);
  }
);

type RegisterData = Record<string, any>;
type LoginCredentials = Record<string, any>;
type TeacherData = Record<string, any>;

export const authAPI = {
  register: (userData: RegisterData) => api.post('/register', userData),
  login: (credentials: LoginCredentials) => api.post('/login', credentials),
};

export const teacherAPI = {
  create: (teacherData: TeacherData) => api.post('/teacher', teacherData),
  getAll: () => api.get('/teachers'),
};

export const userAPI = {
  getAll: () => api.get('/users'), 
};

export default api;