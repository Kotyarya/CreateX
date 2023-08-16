export interface IBranch {
    id: number,
    name: string,
    courseCount: number,
    img: string,
    text: string
}


export enum BranchActionTypes {
    GET_BRANCHES = "GET_BRANCHES",
    FETCHING_BRANCHES = "FETCHING_BRANCHES",
}

interface GetBranches {
    type: BranchActionTypes.GET_BRANCHES,
    payload: IBranch[] | null
}

interface FetchingBranches {
    type: BranchActionTypes.FETCHING_BRANCHES,
}


export type BranchesAction = GetBranches | FetchingBranches

export interface BranchesState {
    branches: IBranch[] | null
    loading: boolean,
}
