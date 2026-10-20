import {CoursesAction, CoursesActionType, CoursesState} from "../Other/Types/coursesTypes";

const initialState: CoursesState = {
    courses: [],
    loading: false,
    activeBranch: 0,
    activeCourse: undefined,
    courseNotFound: false
}

const coursesReducer = (state = initialState, action: CoursesAction): CoursesState => {
    switch (action.type) {
        case CoursesActionType.GET_START_COURSES :
            return {
                ...state,
                courses: action.payload,
                loading: false,
            }
        case CoursesActionType.FETCHING_COURSES :
            return {
                ...state,
                loading: true,
            }
        case CoursesActionType.SET_BRANCH:
            return {
                ...state,
                loading: false,
                activeBranch: action.payload,

            }
        case CoursesActionType.GET_COURSES_BY_BRANCH:
            return {
                ...state,
                courses: action.payload,
                loading: false,
            }
        case CoursesActionType.GET_MORE_COURSES:
            return {
                ...state,
                courses: action.payload ? state.courses?.concat(action.payload) : state.courses,
                loading: false,
            }
        case CoursesActionType.GET_ACTIVE_COURSE:
            return {
                ...state,
                loading: false,
                courseNotFound: false,
                activeCourse: action.payload
            }
        case CoursesActionType.COURSE_NOT_FOUND:
            return {
                ...state,
                courseNotFound: true
            }
        default :
            return state
    }
}

export default coursesReducer
