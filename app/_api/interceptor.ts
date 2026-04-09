import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
});

api.interceptors.request.use(
    (config) => {
        const token = document.cookie.match(/(^| )access_token=([^;]+)/);

        if (token) {
            config.headers.Authorization = `Bearer ${token[2]}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            window.location.href = "/auth/login";
        }
        return Promise.reject(error);
    }
);

export default api;