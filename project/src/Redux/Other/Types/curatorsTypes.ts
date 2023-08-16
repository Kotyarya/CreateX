export interface ICuratorResponse {
    id: number,
    name: string,
    jobTitle: string,
    rate: number,
    students: number,
    img: string,
    description: {
        type: string,
        data: number[]
    }
}

export interface ICurator extends Omit<ICuratorResponse, 'description'> {
    description: string
}

export enum CuratorsActionType {
    GET_CURATORS = "GET_CURATORS",
    FETCHING_CURATORS = "FETCHING_CURATORS",
    GET_ACTIVE_CURATOR = "GET_ACTIVE_CURATOR"
}

interface GetCurators {
    type: CuratorsActionType.GET_CURATORS,
    payload: ICurator[] | null
}

interface FetchingCurators {
    type: CuratorsActionType.FETCHING_CURATORS,
}

interface GetActiveCurator {
    type: CuratorsActionType.GET_ACTIVE_CURATOR,
    payload: ICurator | null

}


export type CuratorAction = GetCurators | FetchingCurators | GetActiveCurator

export interface CuratorState {
    curators: ICurator[] | null
    loading: boolean,
    activeCurators: ICurator | null
}
