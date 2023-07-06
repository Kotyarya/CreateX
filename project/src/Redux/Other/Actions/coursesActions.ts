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

export const setBranch = (branchId: number) => {
    return (dispatch: Dispatch<CoursesAction>) => {
        dispatch({type: CoursesActionType.SET_BRANCH, payload: branchId})
    }
}

export const getCourseByBranch = (branchId: number) => {
    return async (dispatch: Dispatch<CoursesAction>) => {
        dispatch({type: CoursesActionType.FETCHING_COURSES})
    }
}