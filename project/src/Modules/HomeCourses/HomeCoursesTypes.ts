import {ICourse} from "../../Redux/Other/Types/coursesTypes";

export interface HomeCoursesTypes {
    courses: ICourse[] | undefined,
    navigateToCoursesPage: () => void,
    loading: boolean
}