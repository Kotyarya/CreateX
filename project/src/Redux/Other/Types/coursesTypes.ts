import {branch, ICourses} from "../data";

export enum CoursesActionType {
    GET_START_COURSES = "GET_START_COURSES",
    GET_MORE_COURSES = "GET_MORE_COURSES",
    FETCHING_COURSES = "FETCHING_COURSES",
    FILTER_COURSES_BY_BRANCH = "FILTER_COURSES_BY_BRANCH"
}

interface GetStartCoursesAction {
    type: CoursesActionType.GET_START_COURSES,
    payload: ICourses[]
}

interface GetMoreCoursesAction {
    type: CoursesActionType.GET_MORE_COURSES,
    payload: ICourses[]
}

interface FetchingCoursesAction {
    type: CoursesActionType.FETCHING_COURSES,
}

interface FilterCoursesByBranch {
    type: CoursesActionType.FILTER_COURSES_BY_BRANCH,
    payload: branch
}

export type CoursesAction = GetStartCoursesAction | GetMoreCoursesAction | FetchingCoursesAction | FilterCoursesByBranch

export interface CoursesState {
    courses: ICourses[],
    loading: boolean
}
