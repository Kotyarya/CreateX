import {branch, ICourses} from "../data";

export enum CoursesActionType {
    GET_START_COURSES = "GET_START_COURSES",
    GET_MORE_COURSES = "GET_MORE_COURSES",
    FETCHING_COURSES = "FETCHING_COURSES",
    FILTER_COURSES_BY_BRANCH = "FILTER_COURSES_BY_BRANCH",
    SET_ACTIVE_BRANCH = "SET_ACTIVE_BRANCH",
    GET_COURSES = "GET_COURSE",
    GET_COURSE_BY_ID = "GET_COURSE_BY_ID"
}

interface GetStartCoursesAction {
    type: CoursesActionType.GET_START_COURSES,
    payload: ICourses[]
}

interface GetMoreCoursesAction {
    type: CoursesActionType.GET_MORE_COURSES,
    payload: ICourses[]
}

interface GetCourses {
    type: CoursesActionType.GET_COURSES,
    payload: ICourses[]
}

interface FetchingCoursesAction {
    type: CoursesActionType.FETCHING_COURSES,
}

interface FilterCoursesByBranch {
    type: CoursesActionType.FILTER_COURSES_BY_BRANCH,
    payload: ICourses[]
}

interface SetActiveBranch {
    type: CoursesActionType.SET_ACTIVE_BRANCH,
    payload: branch
}

interface GetCourseById {
    type: CoursesActionType.GET_COURSE_BY_ID,
    payload: ICourses
}

export type CoursesAction =
    GetStartCoursesAction
    | GetMoreCoursesAction
    | FetchingCoursesAction
    | FilterCoursesByBranch
    | SetActiveBranch
    | GetCourses
    | GetCourseById

export interface CoursesState {
    courses: ICourses[]
    loading: boolean,
    activeBranch: branch,
    activeCourse: ICourses
}
