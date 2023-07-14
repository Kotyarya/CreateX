import {ICurator} from "../../API/curatorAPI";

export enum CuratorsActionType {
    GET_CURATORS = "GET_CURATORS",
    FETCHING_CURATORS = "FETCHING_CURATORS",
    GET_ACTIVE_CURATOR = "GET_ACTIVE_CURATOR"
}

interface GetCurators {
    type: CuratorsActionType.GET_CURATORS,
    payload: ICurator[] | null
}


interface FetchingCuratorsAction {
    type: CuratorsActionType.FETCHING_CURATORS,
}

interface GetActiveCurator {
    type: CuratorsActionType.GET_ACTIVE_CURATOR,
    payload: ICurator | null

}


export type CuratorAction = GetCurators | FetchingCuratorsAction | GetActiveCurator

export interface CuratorState {
    curators: ICurator[] | null
    loading: boolean,
    activeCurators: ICurator | null
}
