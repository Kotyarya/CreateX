import {instance} from "./axiosConfig";

export interface IBranch {
    id: number,
    name: string,
    courseCount: number
}

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
            alert(e)
        }
    }
}