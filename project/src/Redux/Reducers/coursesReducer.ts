import {CoursesAction, CoursesActionType, CoursesState} from "../Other/Types/coursesTypes";

const initialState: CoursesState = {
    courses: [],
    loading: false,
    activeBranch: 0
}

const coursesReducer = (state = initialState, action: CoursesAction): CoursesState => {
    switch (action.type) {
        case CoursesActionType.GET_START_COURSES :
            return {
                courses: action.payload,
                loading: false,
                activeBranch: state.activeBranch
            }
        case CoursesActionType.FETCHING_COURSES :
            return {
                courses: state.courses,
                loading: true,
                activeBranch: state.activeBranch
            }
        case CoursesActionType.SET_BRANCH:
            return {
                courses: state.courses,
                loading: false,
                activeBranch: action.payload
            }
        case CoursesActionType.GET_COURSES_BY_BRANCH:
            return {
                courses: action.payload,
                loading: false,
                activeBranch: state.activeBranch
            }
        default :
            return state
    }
}

export default coursesReducer
