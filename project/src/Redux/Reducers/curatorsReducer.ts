import {CuratorAction, CuratorsActionType, CuratorState} from "../Other/Types/curatorsTypes";

const initialState: CuratorState = {
    curators: [],
    loading: false,
}

const coursesReducer = (state = initialState, action: CuratorAction): CuratorState => {
    switch (action.type) {
        case CuratorsActionType.GET_CURATORS :
            return {
                curators: action.payload,
                loading: false,
            }
        case CuratorsActionType.FETCHING_CURATORS :
            return {
                curators: state.curators,
                loading: true,
            }
        default :
            return state
    }
}

export default coursesReducer
