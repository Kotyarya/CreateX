import {CoursesAction, CoursesActionType, CoursesState} from "../Other/Types/coursesTypes";
import {branch, courses} from "../Other/data";

const initialState: CoursesState = {
    courses: [],
    loading: false,
    activeBranch: branch.all,
    activeCourse: courses[0]
}

const coursesReducer = (state = initialState, action: CoursesAction): CoursesState => {
    switch (action.type) {
        case CoursesActionType.GET_START_COURSES :
            return {
                courses: action.payload,
                loading: false,
                activeBranch: state.activeBranch,
                activeCourse: state.activeCourse
            }
        case CoursesActionType.GET_MORE_COURSES :
            return {
                courses: state.courses.concat(action.payload),
                loading: false,
                activeBranch: state.activeBranch,
                activeCourse: state.activeCourse
            }
        case CoursesActionType.GET_COURSES :
            return {
                courses: action.payload,
                loading: false,
                activeBranch: state.activeBranch,
                activeCourse: state.activeCourse
            }
        case CoursesActionType.FETCHING_COURSES :
            return {
                courses: state.courses,
                loading: true,
                activeBranch: state.activeBranch,
                activeCourse: state.activeCourse
            }
        case CoursesActionType.FILTER_COURSES_BY_BRANCH :
            return {
                courses: action.payload,
                loading: false,
                activeBranch: state.activeBranch,
                activeCourse: state.activeCourse
            }
        case CoursesActionType.SET_ACTIVE_BRANCH :
            return {
                courses: state.courses,
                loading: false,
                activeBranch: action.payload,
                activeCourse: state.activeCourse
            }
        case CoursesActionType.GET_COURSE_BY_ID:
            return {
                courses: state.courses,
                loading: false,
                activeBranch: state.activeBranch,
                activeCourse: action.payload
            }
        default :
            return state
    }
}

export default coursesReducer
