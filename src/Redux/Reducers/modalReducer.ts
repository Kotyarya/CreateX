import {ModalActions, ModalActionType, ModalState} from "../Other/Types/modalTypes";

const initialState: ModalState = {
    modalWindowIsOpen: false,
    modalType: null
}

const modalReducer = (state = initialState, action: ModalActions): ModalState => {
    switch (action.type) {
        case ModalActionType.SHOW_MODAL_WINDOW:
            return {
                modalWindowIsOpen: true,
                modalType: action.payload
            }
        case ModalActionType.REMOVE_MODAL_WINDOW:
            return {
                modalWindowIsOpen: false,
                modalType: null
            }
        default:
            return state
    }
}

export default modalReducer