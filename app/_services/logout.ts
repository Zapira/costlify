import axios from "axios";
import api from "../_api/interceptor";

export const LogoutService = async () => {
    try {
        const response = await api.post(`${process.env.NEXT_PUBLIC_API_URL}/v1/auth/logout`);
        console.log(response);
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            throw error;
        } else {
            throw new Error("Unexpected error");
        }
    }
}