import axios from "axios";
import api from "../_api/interceptor";

export const createProduct = async (productData: any) => {
    try {
        const response = await api.post(`/product`, productData);
        return response.data
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            throw error;
        } else {
            throw new Error("Unexpected error");
        }
    }
};