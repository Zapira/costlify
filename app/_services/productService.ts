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

export const getProducts = async () => {
    try {
        const response = await api.get(`/product`);
        return response.data
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            throw error;
        } else {
            throw new Error("Unexpected error");
        }
    }
};

export const getProductById = async (id: string) => {
    try {
        const response = await api.get(`/product/get?id=${id}`);
        return response.data
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            throw error;
        } else {
            throw new Error("Unexpected error");
        }
    }
}