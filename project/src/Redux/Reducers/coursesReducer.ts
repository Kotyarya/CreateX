import {CoursesAction, CoursesActionType, CoursesState} from "../Other/Types/coursesTypes";
import {branch} from "../Other/data";

const initialState: CoursesState = {
    courses: [],
    loading: false,
    activeBranch: branch.all
}

const coursesReducer = (state = initialState, action: CoursesAction): CoursesState => {
    switch (action.type) {
        case CoursesActionType.GET_START_COURSES :
            return {courses: action.payload, loading: false, activeBranch: state.activeBranch}
        case CoursesActionType.GET_MORE_COURSES :
            return {courses: action.payload, loading: false, activeBranch: state.activeBranch}
        case CoursesActionType.GET_COURSES :
            return {courses: action.payload, loading: false, activeBranch: state.activeBranch}
        case CoursesActionType.FETCHING_COURSES :
            return {
                courses: state.courses,
                loading: true,
                activeBranch: state.activeBranch
            }
        case CoursesActionType.FILTER_COURSES_BY_BRANCH :
            return {
                courses: action.payload,
                loading: false,
                activeBranch: state.activeBranch
            }
        case CoursesActionType.SET_ACTIVE_BRANCH :
            return {
                courses: state.courses,
                loading: false,
                activeBranch: action.payload
            }
        default :
            return state
    }
}

export default coursesReducer
