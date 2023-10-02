import {IBranch} from "../../Redux/Other/Types/branchTypes";

export interface FooterTypes {
    goTop: () => void,
    branches: IBranch[] | null,
    onClickToCoursePage: (branchId: number) => void,
    loading: boolean
}