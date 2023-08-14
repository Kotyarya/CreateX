import {Dispatch} from "redux";
import {ModalActions, ModalActionType, ModalType} from "../Types/modalTypes";

export const showModalWindow = (modalType: ModalType) => (dispatch: Dispatch<ModalActions>) => {
    dispatch({type: ModalActionType.SHOW_MODAL_WINDOW, payload: modalType})
}

export const removeModalWindow = () => (dispatch: Dispatch<ModalActions>) => {
    dispatch({type: ModalActionType.REMOVE_MODAL_WINDOW})
}