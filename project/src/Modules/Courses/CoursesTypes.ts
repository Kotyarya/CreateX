import {ChangeEvent} from "react";
import {IBranch} from "../../Redux/Other/Types/branchTypes";
import {ICourse} from "../../Redux/Other/Types/coursesTypes";

export interface CoursesTypes {
    searchText: string,
    onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void,
    branches: IBranch[] | null,
    courses: ICourse[] | undefined,
    activeBranch: number,
    loading: boolean,
    changeBranch: (branchId: number, page: number) => void,
    loadMore: () => void,
}