import {ICourse} from "../../API/coursesAPI";

export enum CoursesActionType {
    GET_START_COURSES = "GET_START_COURSES",
    FETCHING_COURSES = "FETCHING_COURSES",
    SET_BRANCH = "SET_BRANCH",
    GET_COURSES_BY_BRANCH = "GET_COURSES_BY_BRANCH",
    GET_MORE_COURSES = "GET_MORE_COURSES",
    GET_ACTIVE_COURSE = "GET_ACTIVE_COURSE"
}

interface GetStartCoursesAction {
    type: CoursesActionType.GET_START_COURSES,
    payload: ICourse[] | undefined
}


interface FetchingCoursesAction {
    type: CoursesActionType.FETCHING_COURSES,
}

interface SetBranch {
    type: CoursesActionType.SET_BRANCH,
    payload: number
}

interface GetCoursesByBranch {
    type: CoursesActionType.GET_COURSES_BY_BRANCH,
    payload: ICourse[] | undefined
}

interface GetMoreCourses {
    type: CoursesActionType.GET_MORE_COURSES,
    payload: ICourse[] | undefined
}

interface GetActiveCourse {
    type: CoursesActionType.GET_ACTIVE_COURSE,
    payload: ICourse | undefined
}


export type CoursesAction =
    GetStartCoursesAction
    | FetchingCoursesAction
    | SetBranch
    | GetCoursesByBranch
    | GetMoreCourses
    | GetActiveCourse

export interface CoursesState {
    courses: ICourse[] | undefined
    loading: boolean,
    activeBranch: number,
    activeCourse: ICourse | undefined
}
