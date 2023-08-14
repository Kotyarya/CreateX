import {Dispatch} from "redux";
import {BranchActionTypes, BranchesAction} from "../Types/branchTypes";
import {branchAPI} from "../../API/branch/branchAPI";

export const getBranches = () => {
    return async (dispatch: Dispatch<BranchesAction>) => {
        dispatch({type: BranchActionTypes.FETCHING_BRANCHES})
        const response = await branchAPI.getBranch() || null
        dispatch({type: BranchActionTypes.GET_BRANCHES, payload: response})
    }
}