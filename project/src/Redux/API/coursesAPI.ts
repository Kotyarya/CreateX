import {instance} from "./axiosConfig";
import {ICurator, ICuratorTemp} from "./curatorAPI";


interface IBranch {
    id: number,
    name: string
}

export interface ICourseTemp {
    id: number,
    title: string,
    price: number,
    description: string,
    date: string,
    branchId: number,
    curatorId: number,
    branch: IBranch,
    curator: ICuratorTemp,
    willLearn: { text: string }[],
    lessons: { title: string, description: string }[],
    forWhom: { text: string }[]
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
    curator: ICurator,
    willLearn: { text: string }[],
    lessons: { title: string, description: string }[],
    forWhom: { text: string }[]
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
    },
    getCourseById: async (courseId: number) => {
        try {
            const response = await instance.get<ICourseTemp>(`/course/${courseId}`)
            return {
                ...response.data,
                curator: {
                    ...response.data.curator,
                    description: response.data.curator.description.data.map((element) => String.fromCharCode(element)).join("")
                }
            }
        } catch (e) {
            alert(e)
        }
    }
}