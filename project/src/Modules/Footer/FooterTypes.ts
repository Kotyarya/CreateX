import {IBranch} from "../../Redux/Other/Types/branchTypes";

export interface FooterTypes {
    goTop: () => void,
    submit: (values: any) => void,
    branches: IBranch[] | null,
    onClickToCoursePage: (branchId: number) => void
}