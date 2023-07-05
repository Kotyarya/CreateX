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