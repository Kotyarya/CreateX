import {instance} from "../axiosConfig";
import {IBranch} from "../../Other/Types/branchTypes";


export const branchAPI = {
    getBranch: async () => {
        try {
            const response = await instance.get<IBranch[]>("/branch")
            return response.data.map((branch) => {
                return {
                    ...branch,
                    courseCount: Number(branch.courseCount)
                }
            })
        } catch (e) {
            return null
        }
    }
}