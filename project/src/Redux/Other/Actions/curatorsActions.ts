import {Dispatch} from "redux";
import {CuratorAction, CuratorsActionType} from "../Types/curatorsTypes";
import {curatorAPI} from "../../API/curator/curatorAPI";

export const getCurators = () => {
    return async (dispatch: Dispatch<CuratorAction>) => {
        dispatch({type: CuratorsActionType.FETCHING_CURATORS})
        const response = await curatorAPI.getCurators() || null
        dispatch({type: CuratorsActionType.GET_CURATORS, payload: response})
    }
}

export const getActiveCurators = (curatorId: number) => {
    return async (dispatch: Dispatch<CuratorAction>) => {
        dispatch({type: CuratorsActionType.FETCHING_CURATORS})
        const response = await curatorAPI.getActiveCurators(curatorId) || null
        dispatch({type: CuratorsActionType.GET_ACTIVE_CURATOR, payload: response})
    }
}