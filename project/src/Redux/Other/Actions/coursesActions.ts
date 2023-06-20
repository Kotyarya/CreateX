import {Dispatch} from "redux";
import {CoursesAction, CoursesActionType} from "../Types/coursesTypes";
import {courses} from "../data";

export const getStartCourses = () => {
    return async (dispatch: Dispatch<CoursesAction>) => {
        dispatch({type: CoursesActionType.FETCHING_COURSES})
        setTimeout(() => {
            const response = courses.filter((course) => course.id <= 6)
            dispatch({type: CoursesActionType.GET_START_COURSES, payload: response})
        }, 100)
    }
}