import {CoursesAction, CoursesActionType, CoursesState} from "../Other/Types/coursesTypes";

const initialState: CoursesState = {
    courses: [],
    loading: false
}

const coursesReducer = (state = initialState, action: CoursesAction): CoursesState => {
    switch (action.type) {
        case CoursesActionType.GET_START_COURSES :
            return {courses: action.payload, loading: false}
        case CoursesActionType.GET_MORE_COURSES :
            return {courses: action.payload, loading: false}
        case CoursesActionType.FETCHING_COURSES :
            return {
                courses: state.courses,
                loading: true
            }
        case CoursesActionType.FILTER_COURSES_BY_BRANCH :
            return {
                courses: state.courses.filter((course) => course.branch === action.payload),
                loading: false
            }
        default :
            return state
    }
}

export default coursesReducer
