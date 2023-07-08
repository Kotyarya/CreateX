import {Dispatch} from "redux";
import {CoursesAction, CoursesActionType} from "../Types/coursesTypes";
import {coursesApi} from "../../API/coursesAPI";

export const getStartCourses = () => {
    return async (dispatch: Dispatch<CoursesAction>) => {
        dispatch({type: CoursesActionType.FETCHING_COURSES})
        const response = await coursesApi.getStartCourse()
        dispatch({type: CoursesActionType.GET_START_COURSES, payload: response})
    }
}


export const getCourseByBranch = (branchId: number, page: number) => {
    return async (dispatch: Dispatch<CoursesAction>) => {
        dispatch({type: CoursesActionType.FETCHING_COURSES})
        const response = await coursesApi.getCoursesByBranch(branchId, page)
        dispatch({type: CoursesActionType.SET_BRANCH, payload: branchId})
        dispatch({type: CoursesActionType.GET_COURSES_BY_BRANCH, payload: response})
    }
}

export const getMoreCourses = (branchId: number, page: number) => {
    return async (dispatch: Dispatch<CoursesAction>) => {
        dispatch({type: CoursesActionType.FETCHING_COURSES})
        const response = await coursesApi.getCoursesByBranch(branchId, page)
        dispatch({type: CoursesActionType.GET_MORE_COURSES, payload: response})
    }
}

export const getActiveCourse = (courseId: number) => {
    return async (dispatch: Dispatch<CoursesAction>) => {
        dispatch({type: CoursesActionType.FETCHING_COURSES})
        const response = await coursesApi.getCourseById(courseId)
        dispatch({type: CoursesActionType.GET_ACTIVE_COURSE, payload: response})
    }
}