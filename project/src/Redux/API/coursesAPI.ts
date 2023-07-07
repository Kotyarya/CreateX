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
    branch: IBranch,
    curator: {
        img: string,
        name: string
    }
}


export const coursesApi = {
    getStartCourse: async () => {
        try {
            const response = await instance.get<ICourse[]>("/course?page=1&limit=6&branchId=0")
            return response.data
        } catch (e) {
            alert(e)
        }
    },
    getCoursesByBranch: async (branchId: number = 0, page: number = 1) => {
        try {
            const response = await instance.get<ICourse[]>(`/course?branchId=${branchId}&page=${page}`)
            return response.data
        } catch (e) {
            alert(e)
        }
    }
}