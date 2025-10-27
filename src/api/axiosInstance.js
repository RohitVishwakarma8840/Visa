import axios from 'axios';

const axiosInstance = axios.create({
  
  // baseURL: 'http://localhost:5000/api/', // gateway,
  baseURL: 'https://vs-sports-backend-1.onrender.com/', // gateway,


  headers: {
    'Content-Type': 'application/json',
  },
});


// Request interceptor for adding auth token
axiosInstance.interceptors.request.use(
  (config) => { 
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    config.headers['ngrok-skip-browser-warning'] = 'true';
    return config;
  },
  (error) => Promise.reject(error)
);

// // Response interceptor for handling errors globally
axiosInstance.interceptors.response.use(
  (response) => response?.data,
  (error) => {
    console.log("api error in interceptor : ", error)
    // Optionally handle specific error codes globally
    if (error.response && error.response.status === 401 && window.location.pathname !== '/') {
      // Handle unauthorized, e.g., redirect to login
      localStorage.removeItem('token')
      // Optional: redirect to login if not already there
        window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

export default axiosInstance; 