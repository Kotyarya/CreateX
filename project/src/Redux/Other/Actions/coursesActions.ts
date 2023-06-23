import {Dispatch} from "redux";
import {CoursesAction, CoursesActionType} from "../Types/coursesTypes";
import {branch, courses} from "../data";

export const getStartCourses = () => {
    return async (dispatch: Dispatch<CoursesAction>) => {
        dispatch({type: CoursesActionType.FETCHING_COURSES})
        setTimeout(() => {
            const response = courses.filter((course, index) => index < 6)
            dispatch({type: CoursesActionType.GET_START_COURSES, payload: response})
        }, 100)
    }
}

export const setActiveBranch = (oneBranch: string) => (dispatch: Dispatch<CoursesAction>) => {
    dispatch({type: CoursesActionType.SET_ACTIVE_BRANCH, payload: branch[oneBranch as keyof typeof branch]})
}

export const filterCoursesByBranch = (oneBranch: string) => (dispatch: Dispatch<CoursesAction>) => {
    dispatch(
        {
            type: CoursesActionType.FILTER_COURSES_BY_BRANCH,
            payload:
                (branch[oneBranch as keyof typeof branch] !== branch.all
                    ? courses.filter((course) => course.branch === branch[oneBranch as keyof typeof branch])
                    : courses).filter((course, index) => index < 9)
        }
    )
}

export const getCourses = () => (dispatch: Dispatch<CoursesAction>) => {
    dispatch({type: CoursesActionType.GET_COURSES, payload: courses.filter((course, index) => index < 9)})
}

// export const getMoreCourses = (oneBranch: string) => (dispatch: Dispatch<CoursesAction>) => {
//     dispatch({
//         type: CoursesActionType.GET_MORE_COURSES,
//         payload: (branch[oneBranch as keyof typeof branch] !== branch.all
//             ? courses.filter((course) => course.branch === branch[oneBranch as keyof typeof branch])
//             : courses)
//     })
// }