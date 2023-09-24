import {BlogsActions, BlogsActionType, BlogsState} from "../Other/Types/blogsTypes";

const initialState: BlogsState = {
    blogs: null,
    blogTypes: null,
    loading: false,
    activeBlogType: 0,
    count: 0,
    activeBlog: null,
    loadingBlog: false,
    blogNotFound: false
}


const blogReducer = (state = initialState, action: BlogsActions): BlogsState => {

    switch (action.type) {
        case BlogsActionType.GET_BLOGS:
            return {
                ...state,
                blogs: action.payload,
                loading: false
            }
        case BlogsActionType.FETCHING_BLOGS:
            return {
                ...state,
                loading: true
            }
        case BlogsActionType.GET_BLOG_TYPES:
            return {
                ...state,
                blogTypes: action.payload,
                loading: false
            }
        case BlogsActionType.SET_ACTIVE_BLOG_TYPE:
            return {
                ...state,
                activeBlogType: action.payload,
                loading: false
            }
        case BlogsActionType.GET_COUNT_BLOGS:
            return {
                ...state,
                count: action.payload,
                loading: false
            }
        case BlogsActionType.GET_ACTIVE_BLOG:
            return {
                ...state,
                activeBlog: action.payload,
                loadingBlog: false,
                blogNotFound: false
            }
        case BlogsActionType.FETCHING_BLOG:
            return {
                ...state,
                loadingBlog: true
            }
        case BlogsActionType.BLOG_NOT_FOUND:
            return {
                ...state,
                blogNotFound: true
            }
        default:
            return state
    }

}

export default blogReducer