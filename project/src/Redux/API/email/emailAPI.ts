import {instance} from "../axiosConfig";

export const emailAPI = {
    subscribe: async (email: string) => {
        try {
            const response = await instance.post("/email/subscribe", {
                key: "b2feddf8-1e7a-4a32-9276-781bf68b6867",
                email
            })
            return response
        } catch (e) {

        }
    },
    register: async () => {
    },
    sendMessage: async () => {
    }
}