import {IBranch} from "../../API/branchAPI";

export enum BranchActionTypes {
    GET_BRANCHES = "GET_BRANCHES",
    FETCHING_BRANCHES = "FETCHING_BRANCHES",
}

interface GetBranches {
    type: BranchActionTypes.GET_BRANCHES,
    payload: IBranch[] | undefined
}


interface FetchingBranches {
    type: BranchActionTypes.FETCHING_BRANCHES,
}


export type BranchesAction = GetBranches | FetchingBranches

export interface BranchesState {
    branches: IBranch[] | undefined
    loading: boolean,
}
