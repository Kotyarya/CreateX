import axios from "axios";
import {instance} from "../axiosConfig";

export interface RegistrationData {
    name: string,
    surname: string,
    email: string,
    password: string
}

const request = async (url: string, data: object): Promise<string> => {
    try {
        const response = await instance.post<{token: string}>(url, data)
        return response.data.token
    } catch (error) {
        if (axios.isAxiosError(error)) throw new Error(error.response?.data?.message || "Authentication failed")
        throw new Error("Authentication failed")
    }
}

export const userAPI = {
    login: (email: string, password: string) => request("/user/login", {email, password}),
    register: (data: RegistrationData) => request("/user/reg", data),
}
