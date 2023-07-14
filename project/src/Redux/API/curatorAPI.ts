import {instance} from "./axiosConfig";

export interface ICuratorTemp {
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

export interface ICurator {
    id: number,
    name: string,
    jobTitle: string,
    rate: number,
    students: number,
    img: string,
    description: string
}


export const curatorAPI = {
    getCurators: async (limit?: number) => {
        try {
            const response = await instance.get<ICuratorTemp[]>(`/curator${limit ? `?limit=${limit}` : ""}`)
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
            const response = await instance.get<ICuratorTemp>(`/curator/${curatorId}`)
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