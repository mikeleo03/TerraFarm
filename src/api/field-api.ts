import axios from "axios";
import { CropResponse } from "@/types";
import { API_URL } from "@/constant";
import Cookies from "js-cookie";

class FieldApi{
    private static readonly token = Cookies.get("tf-token") ?? "";
    private static readonly axios = axios.create({
        baseURL: import.meta.env.VITE_BE_URL || API_URL,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${this.token}`,
        },
    });

    static async getFieldById(userId: number): Promise<CropResponse[]> {
        // eslint-disable-next-line no-useless-catch
        try {
            const response = await this.axios.get<CropResponse[]>(`/field`, {
                params: { userId }
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

export default FieldApi;