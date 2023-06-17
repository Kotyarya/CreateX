import {CoursesAction, CoursesState} from "../Other/Types/coursesTypes";

const initialState: CoursesState = {
    courses: [],
    loading: false
}

const coursesReducer = (state = initialState, action: CoursesAction): CoursesState => {
    switch (action.type) {
        case "GET_START_COURSES" :
            return {courses: action.payload, loading: false}
        case "GET_MORE_COURSES" :
            return {courses: action.payload, loading: false}
        case "FETCHING_COURSES" :
            return {
                courses: state.courses,
                loading: true
            }
        case "FILTER_COURSES_BY_BRANCH" :
            return {
                courses: state.courses.filter((course) => course.branch === action.payload),
                loading: false
            }
        default :
            return state
    }
}

export default coursesReducer
