'use client';

import axios from "axios";
import { useRouter } from "next/navigation";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
});

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            useRouter().push("/auth/login"); 
        }

        return Promise.reject(error);
    }
);

export default api;