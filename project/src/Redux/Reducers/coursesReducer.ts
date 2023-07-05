import {CoursesAction, CoursesActionType, CoursesState} from "../Other/Types/coursesTypes";

const initialState: CoursesState = {
    courses: [],
    loading: false,
}

const coursesReducer = (state = initialState, action: CoursesAction): CoursesState => {
    switch (action.type) {
        case CoursesActionType.GET_START_COURSES :
            return {
                courses: action.payload,
                loading: false,
            }
        case CoursesActionType.FETCHING_COURSES :
            return {
                courses: state.courses,
                loading: true,
            }
        default :
            return state
    }
}

export default coursesReducer
