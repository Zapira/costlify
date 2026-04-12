import { LoginFormData } from "../_types/authType";
import api from "../_api/interceptor";

export const loginService = async (auth: LoginFormData) => {
    try {
        const response = await api.post('/login', auth)
        return response
    } catch (error) {
        throw error
    }

}