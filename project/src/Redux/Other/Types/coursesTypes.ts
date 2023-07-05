import {ICourse} from "../../API/coursesAPI";

export enum CoursesActionType {
    GET_START_COURSES = "GET_START_COURSES",
    FETCHING_COURSES = "FETCHING_COURSES",
}

interface GetStartCoursesAction {
    type: CoursesActionType.GET_START_COURSES,
    payload: ICourse[] | undefined
}


interface FetchingCoursesAction {
    type: CoursesActionType.FETCHING_COURSES,
}


export type CoursesAction = GetStartCoursesAction | FetchingCoursesAction

export interface CoursesState {
    courses: ICourse[] | undefined
    loading: boolean,
}
