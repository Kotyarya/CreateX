import {instance} from "./axiosConfig";

export interface ICuratorResponse {
    id: number,
    name: string,
    jobTitle: string,
    rate: number,
    students: number,
    img: string,
    description: {
        type: string,
        data: number[]
    }
}

export interface ICurator extends Omit<ICuratorResponse, 'description'> {
    description: string
}


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
            alert(e)
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
            alert(e)
        }
    }
}