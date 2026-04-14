import api from "../_api/interceptor"

export const AuthChecking = async () => {
    try {
        const response = await api.get("/v1/profile");
        return response.data;

    } catch (error) {
        console.error("Auth check failed:", error);
    }
};