import axios from 'axios';
import { Product } from '../types/Product';

const API_URL = 'http://localhost:8080/api/products';

export const api = {
    getAllProducts: async (): Promise<Product[]> => {
        const response = await axios.get(API_URL);
        return response.data;
    },

    createProduct: async (product: Product): Promise<Product> => {
        const response = await axios.post(API_URL, product);
        return response.data;
    },

    updateProduct: async (id: string, product: Product): Promise<Product> => {
        const response = await axios.put(`${API_URL}/${id}`, product);
        return response.data;
    },

    deleteProduct: async (id: string): Promise<void> => {
        await axios.delete(`${API_URL}/${id}`);
    }
}; 