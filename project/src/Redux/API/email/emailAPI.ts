import {instance} from "../axiosConfig";

export const emailAPI = {
    subscribe: async (email: string) => {
        try {
            const response = await instance.post("/email/subscribe", {email})
            return response
        } catch (e) {
            throw e
        }
    },
    register: async () => {
    },
    sendMessage: async () => {
    }
}
