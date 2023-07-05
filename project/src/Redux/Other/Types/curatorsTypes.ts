import {ICurator} from "../../API/curatorAPI";

export enum CuratorsActionType {
    GET_CURATORS = "GET_CURATORS",
    FETCHING_CURATORS = "FETCHING_CURATORS",
}

interface GetCurators {
    type: CuratorsActionType.GET_CURATORS,
    payload: ICurator[] | undefined
}


interface FetchingCuratorsAction {
    type: CuratorsActionType.FETCHING_CURATORS,
}


export type CuratorAction = GetCurators | FetchingCuratorsAction

export interface CuratorState {
    curators: ICurator[] | undefined
    loading: boolean,
}
