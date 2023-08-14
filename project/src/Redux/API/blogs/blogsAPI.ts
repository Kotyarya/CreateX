import {instance} from "../axiosConfig";
import {IBlog, IBlogType} from "../../Other/Types/blogsTypes";


export const blogAPI = {
    getBlogs: async (page: number, blogTypeId: number, branchId: number, text: string) => {
        try {
            let textRequest = text ? `&text=${text}` : ""
            const response = await instance.get(`/blog?page=${page}&blogTypeId=${blogTypeId}&branchId=${branchId}` + textRequest)
            return {
                count: response.data.count,
                blogs: response.data.rows as IBlog[]
            }
        } catch (e) {
            return null
        }
    },

    getBlogType: async () => {
        try {
            const response = await instance.get("/blogType")
            return response.data as IBlogType[]
        } catch (e) {
            return null
        }
    },

    getBlogById: async (blogId: number) => {
        try {
            const response = await instance.get(`/blog/${blogId}`)
            return response.data as IBlog
        } catch (e) {
            return null
        }
    }
}