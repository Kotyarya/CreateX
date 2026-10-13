import axios from "axios";
import {instance} from "../axiosConfig";

export interface RegistrationRequest {
    email: string,
    name: string,
    phone: string
}

export interface ContactRequest extends RegistrationRequest {
    message: string
}

const getMessage = (error: unknown) => axios.isAxiosError(error)
    ? error.response?.data?.message || "Request failed"
    : "Request failed"

const post = async (url: string, data: object) => {
    try {
        return await instance.post(url, data)
    } catch (error) {
        throw new Error(getMessage(error))
    }
}

export const emailAPI = {
    subscribe: (email: string) => post("/email/subscribe", {email}),
    register: (data: RegistrationRequest) => post("/email/register", data),
    sendMessage: (data: ContactRequest) => post("/email/sendMessage", data),
}
