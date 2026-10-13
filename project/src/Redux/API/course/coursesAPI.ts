import {instance} from "../axiosConfig";
import {ICourse, ICourseResponse} from "../../Other/Types/coursesTypes";
import {normalizeText} from "../../../utils/helpers/normalizeText";


export const coursesApi = {
    getStartCourse: async () => {
        try {
            const response = await instance.get<ICourse[]>("/course?page=1&limit=6&branchId=0")
            return response.data
        } catch (e) {
            return undefined
        }
    },
    getCoursesByBranch: async (branchId: number = 0, page: number = 1, text: string) => {
        try {
            let searchText = text ? `&text=${text}` : ""
            const response = await instance.get<ICourse[]>(`/course?branchId=${branchId}&page=${page}${searchText}`)
            return response.data
        } catch (e) {
            return undefined
        }
    },
    getCourseById: async (courseId: number) => {
        try {
            const response = await instance.get<ICourseResponse>(`/course/${courseId}`)
            return {
                ...response.data,
                curator: {
                    ...response.data.curator,
                    description: normalizeText(response.data.curator.description)
                }
            }
        } catch (e) {
            return null
        }
    }
}
