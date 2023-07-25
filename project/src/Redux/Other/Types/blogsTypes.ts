import {IBlog, IBlogType} from "../../API/blogsAPI";

export enum BlogsActionType {
    FETCHING_BLOGS = "FETCHING_BLOGS",
    GET_BLOGS = "GET_BLOGS",
    GET_BLOG_TYPES = "GET_BLOG_TYPES",
    SET_ACTIVE_BLOG_TYPE = "SET_ACTIVE_BLOG_TYPE",
    GET_COUNT_BLOGS = "GET_COUNT_BLOGS",
    GET_ACTIVE_BLOG = "GET_ACTIVE_BLOG"
}

interface GetCountBlogs {
    type: BlogsActionType.GET_COUNT_BLOGS,
    payload: number
}

interface GetBlogs {
    type: BlogsActionType.GET_BLOGS
    payload: IBlog[] | undefined
}

interface GetBlogTypes {
    type: BlogsActionType.GET_BLOG_TYPES,
    payload: IBlogType[] | undefined
}

interface SetActiveBlogType {
    type: BlogsActionType.SET_ACTIVE_BLOG_TYPE,
    payload: number
}

interface FetchingBlogs {
    type: BlogsActionType.FETCHING_BLOGS
}

interface GetActiveBlog {
    type: BlogsActionType.GET_ACTIVE_BLOG,
    payload: IBlog | undefined
}

export type BlogsActions = GetBlogs | FetchingBlogs | GetBlogTypes | SetActiveBlogType | GetCountBlogs | GetActiveBlog

export interface BlogsState {
    blogs: IBlog[] | undefined,
    loading: boolean,
    activeBlogType: number,
    blogTypes: IBlogType[] | undefined,
    count: number,
    activeBlog: IBlog | undefined
}