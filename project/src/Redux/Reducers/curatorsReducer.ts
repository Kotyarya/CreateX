import {CuratorAction, CuratorsActionType, CuratorState} from "../Other/Types/curatorsTypes";

const initialState: CuratorState = {
    curators: [],
    loading: false,
    activeCurators: null
}

const coursesReducer = (state = initialState, action: CuratorAction): CuratorState => {
    switch (action.type) {
        case CuratorsActionType.GET_CURATORS :
            return {
                ...state,
                curators: action.payload,
                loading: false,
            }
        case CuratorsActionType.FETCHING_CURATORS :
            return {
                ...state,
                curators: state.curators,
                loading: true,
            }
        case CuratorsActionType.GET_ACTIVE_CURATOR:
            return {
                ...state,
                activeCurators: action.payload
            }
        default :
            return state
    }
}

export default coursesReducer
