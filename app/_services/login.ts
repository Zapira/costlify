import { LoginFormData } from "../_types/authType";
import axios from "axios";

export const loginService = async (data: LoginFormData) => {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, data, {
            withCredentials: true,
        });
        return response.data
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            throw error;
        } else {
            throw new Error("Unexpected error");
        }
    }

}