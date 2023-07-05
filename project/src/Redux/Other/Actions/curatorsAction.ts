import {Dispatch} from "redux";
import {CuratorAction, CuratorsActionType} from "../Types/curatorsTypes";
import {curatorAPI} from "../../API/curatorAPI";

export const getCurators = () => {
    return async (dispatch: Dispatch<CuratorAction>) => {
        dispatch({type: CuratorsActionType.FETCHING_CURATORS})
        const response = await curatorAPI.getCurators()
        dispatch({type: CuratorsActionType.GET_CURATORS, payload: response})
    }
}