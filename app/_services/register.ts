import axios from "axios";
import { RegisterFormData } from "../_types/authType";

export const registerUser = async (data: RegisterFormData) => {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/register`, data);
        return response.data;
    } catch (error) {
        throw error;
    }
}