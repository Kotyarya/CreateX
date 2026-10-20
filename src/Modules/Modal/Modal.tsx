import React, {FC} from 'react';
import style from "./Modal.module.scss"
import {useAction} from "../../hook/useAction";
import {useTypedSelector} from "../../hook/useTypedSelector";
import {ModalType} from "../../Redux/Other/Types/modalTypes";
import LoginModal from "./LoginModal/LoginModal";
import VideoModal from "./VideoModal/VideoModal";


const Modal: FC = () => {

    const {removeModalWindow} = useAction()
    const modalType = useTypedSelector(state => state.modal.modalType)

    let modal

    switch (modalType) {
        case ModalType.logIn:
            modal = <LoginModal removeModalWindow={removeModalWindow}/>
            break
        case ModalType.registration:
            modal = <LoginModal removeModalWindow={removeModalWindow}/>
            break
        case ModalType.video:
            modal = <VideoModal removeModalWindow={removeModalWindow}/>
            break
    }

    return (
        <div className={style.wrapper}>
            {modal}
        </div>
    );
};

export default Modal;