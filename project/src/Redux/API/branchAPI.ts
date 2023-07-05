import {instance} from "./axiosConfig";

export const branchAPI = {
    getBranch: async () => {
        try {
            const response = await instance.get("/branch")
            return response.data
        } catch (e) {
            alert(e)
        }
    }
}