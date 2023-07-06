import {BranchActionTypes, BranchesAction, BranchesState} from "../Other/Types/branchTypes";

const initialState: BranchesState = {
    branches: [],
    loading: false,
}

const branchReducer = (state = initialState, action: BranchesAction): BranchesState => {
    switch (action.type) {
        case BranchActionTypes.GET_BRANCHES :
            return {
                branches: action.payload,
                loading: false,
            }
        case BranchActionTypes.FETCHING_BRANCHES :
            return {
                branches: state.branches,
                loading: true,
            }
        default :
            return state
    }
}

export default branchReducer
