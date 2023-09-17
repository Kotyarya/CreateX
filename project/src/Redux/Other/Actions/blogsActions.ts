import {Dispatch} from "redux";
import {BlogsActions, BlogsActionType} from "../Types/blogsTypes";
import {blogAPI} from "../../API/blogs/blogsAPI";

export const getBlogs = (page: number, blogTypeId: number, branchId: number, text: string) => {
    return async (dispatch: Dispatch<BlogsActions>) => {
        dispatch({type: BlogsActionType.FETCHING_BLOGS})
        const response = await blogAPI.getBlogs(page, blogTypeId, branchId, text) || null
        dispatch({type: BlogsActionType.GET_BLOGS, payload: response?.blogs || null})
        dispatch({type: BlogsActionType.GET_COUNT_BLOGS, payload: response?.count})
    }
}

export const getBlogTypes = () => {
    return async (dispatch: Dispatch<BlogsActions>) => {
        dispatch({type: BlogsActionType.FETCHING_BLOGS})
        const response = await blogAPI.getBlogType() || null
        dispatch({type: BlogsActionType.GET_BLOG_TYPES, payload: response})
    }
}

export const setActiveBlogType = (BlogTypeId: number) => {
    return (dispatch: Dispatch<BlogsActions>) => {
        dispatch({type: BlogsActionType.SET_ACTIVE_BLOG_TYPE, payload: BlogTypeId})
    }
}

export const getActiveBlog = (blogId: number) => {
    return async (dispatch: Dispatch<BlogsActions>) => {
        dispatch({type: BlogsActionType.FETCHING_BLOGS})
        const response = blogId === 0 ? null : await blogAPI.getBlogById(blogId)
        dispatch({type: BlogsActionType.GET_ACTIVE_BLOG, payload: response})
    }
}