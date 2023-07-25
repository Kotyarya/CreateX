import {instance} from "./axiosConfig";

export interface IBlog {
    id: number,
    title: string,
    month: string,
    day: number,
    img: string,
    mainText: string,
    firstText: string,
    secondText: string,
    summary: string,
    curatorId: number,
    branchId: number,
    blogTypeId: number
    blogType: {
        name: string
    },
    branch: {
        name: string,
        tags: { text: string }[]
    },
    articleElement: IArticleElement | null,
    videoElement: IVideoElement | null,
    podcastElement: IPodcastElement | null
}

export interface IArticleElement {
    id: number,
    article: string,
    blogId: number,
    text: string,
    articleElementList: {
        text: string
    }[]
}

export interface IVideoElement {
    id: number,
    url: string,
    blogId: number,
    time: number
}

export interface IPodcastElement {
    id: number,
    audio: string,
    blogId: number,
    time: number
}

export interface IBlogType {
    id: number,
    name: string
}


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
            alert(e)
        }
    },

    getBlogType: async () => {
        try {
            const response = await instance.get("/blogType")
            return response.data as IBlogType[]
        } catch (e) {
            alert(e)
        }
    },

    getBlogById: async (blogId: number) => {
        try {
            const response = await instance.get(`/blog/${blogId}`)
            return response.data as IBlog
        } catch (e) {
            alert(e)
        }
    }
}