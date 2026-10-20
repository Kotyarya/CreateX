export enum ModalActionType {
    SHOW_MODAL_WINDOW = "SHOW_MODAL_WINDOW",
    REMOVE_MODAL_WINDOW = "REMOVE_MODAL_WINDOW"
}

export enum ModalType {
    video = "video",
    logIn = "logIn",
    registration = "registration"
}

interface ShowModalWindow {
    type: ModalActionType.SHOW_MODAL_WINDOW,
    payload: ModalType
}

interface RemoveModalWindow {
    type: ModalActionType.REMOVE_MODAL_WINDOW
}

export type ModalActions = ShowModalWindow | RemoveModalWindow

export interface ModalState {
    modalWindowIsOpen: boolean,
    modalType: ModalType | null
}