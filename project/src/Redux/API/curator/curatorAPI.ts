import {instance} from "../axiosConfig";
import {ICurator, ICuratorResponse} from "../../Other/Types/curatorsTypes";


export const curatorAPI = {
    getCurators: async (limit?: number) => {
        try {
            const response = await instance.get<ICuratorResponse[]>(`/curator${limit ? `?limit=${limit}` : ""}`)
            return response.data.map((curator) => {
                return {
                    ...curator,
                    description: curator.description.data.map((element) => String.fromCharCode(element)).join("")
                }
            })
        } catch (e) {
            return undefined
        }
    },


    async getActiveCurators(curatorId: number) {
        try {
            const response = await instance.get<ICuratorResponse>(`/curator/${curatorId}`)
            const result: ICurator = {
                ...response.data,
                description: response.data.description.data.map((element) => String.fromCharCode(element)).join("")
            }
            return result
        } catch (e) {
            return undefined
        }
    }
}