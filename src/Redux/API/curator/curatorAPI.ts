import {instance} from "../axiosConfig";
import {ICurator, ICuratorResponse} from "../../Other/Types/curatorsTypes";
import {normalizeText} from "../../../utils/helpers/normalizeText";


export const curatorAPI = {
    getCurators: async (limit?: number) => {
        try {
            const response = await instance.get<ICuratorResponse[]>(`/curator${limit ? `?limit=${limit}` : ""}`)
            return response.data.map((curator) => {
                return {
                    ...curator,
                    description: normalizeText(curator.description)
                }
            })
        } catch {
            return undefined
        }
    },


    async getActiveCurators(curatorId: number) {
        try {
            const response = await instance.get<ICuratorResponse>(`/curator/${curatorId}`)
            const result: ICurator = {
                ...response.data,
                description: normalizeText(response.data.description)
            }
            return result
        } catch {
            return undefined
        }
    }
}
