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


export enum BlogsActionType {
    FETCHING_BLOGS = "FETCHING_BLOGS",
    GET_BLOGS = "GET_BLOGS",
    GET_BLOG_TYPES = "GET_BLOG_TYPES",
    SET_ACTIVE_BLOG_TYPE = "SET_ACTIVE_BLOG_TYPE",
    GET_COUNT_BLOGS = "GET_COUNT_BLOGS",
    GET_ACTIVE_BLOG = "GET_ACTIVE_BLOG",
    FETCHING_BLOG = "FETCHING_BLOG",
}

interface FetchingBlog {
    type: BlogsActionType.FETCHING_BLOG,
}

interface GetCountBlogs {
    type: BlogsActionType.GET_COUNT_BLOGS,
    payload: number
}

interface GetBlogs {
    type: BlogsActionType.GET_BLOGS
    payload: IBlog[] | null
}

interface GetBlogTypes {
    type: BlogsActionType.GET_BLOG_TYPES,
    payload: IBlogType[] | null
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
    payload: IBlog | null
}

export type BlogsActions =
    GetBlogs
    | FetchingBlogs
    | GetBlogTypes
    | SetActiveBlogType
    | GetCountBlogs
    | GetActiveBlog
    | FetchingBlog

export interface BlogsState {
    blogs: IBlog[] | null,
    loading: boolean,
    activeBlogType: number,
    blogTypes: IBlogType[] | null,
    count: number,
    activeBlog: IBlog | null,
    loadingBlog: boolean
}