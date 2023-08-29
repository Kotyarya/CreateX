import {IBranch} from "../../Redux/Other/Types/branchTypes";

export interface DirectionsTypes {
    branches: IBranch[] | null,
    navigateToCoursesPageHandler: (branchId: number) => void
}