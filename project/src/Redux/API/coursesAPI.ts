import {instance} from "./axiosConfig";
import {ICurator, ICuratorResponse} from "./curatorAPI";
import {IBranch} from "./branchAPI";


export interface ILessons {
    title: string,
    description: string
}


export interface ICourseResponse {
    id: number,
    title: string,
    price: number,
    description: string,
    date: string,
    branchId: number,
    curatorId: number,
    branch: IBranch,
    curator: ICuratorResponse,
    willLearn: { text: string }[],
    lessons: ILessons[],
    forWhom: { text: string }[]
}

export interface ICourse extends Omit<ICourseResponse, "curator"> {
    curator: ICurator,
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
            const response = await instance.get<ICourseResponse>(`/course/${courseId}`)
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