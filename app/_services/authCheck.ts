import api from "../_api/interceptor"

export const AuthChecking = async () => {
    try {
        const response = await api.get(`${process.env.NEXT_PUBLIC_API_URL}/profile`);
        return response.data;

    } catch (error) {
        console.error("Auth check failed:", error);
    }
};