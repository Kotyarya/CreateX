import {instance} from "./axiosConfig";


interface IBranch {
    id: number,
    name: string
}

export interface ICourse {
    id: number,
    title: string,
    price: number,
    description: string,
    date: string,
    branchId: number,
    curatorId: number,
    branch: IBranch
}


export const coursesApi = {
    getStartCourse: async () => {
        try {
            const response = await instance.get<ICourse[]>("/course?page=1&limit=8&branchId=0")
            return response.data
        } catch (e) {
            alert(e)
        }
    }
}