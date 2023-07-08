import {CoursesAction, CoursesActionType, CoursesState} from "../Other/Types/coursesTypes";

const initialState: CoursesState = {
    courses: [],
    loading: false,
    activeBranch: 0,
    activeCourse: undefined
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
                activeCourse: action.payload
            }
        default :
            return state
    }
}

export default coursesReducer
