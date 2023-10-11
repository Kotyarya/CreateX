import React, {FC} from 'react';
import style from "./LoginModal.module.scss";
import {ModalTypes} from "../ModalTypes";
import {ReactComponent as CloseSVG} from "../../../assets/icons/other/Cross.svg";
import SignInForm from "./LoginForm/SignInForm/SignInForm";
import {useTypedSelector} from "../../../hook/useTypedSelector";
import {ModalType} from "../../../Redux/Other/Types/modalTypes";
import RegistrationForm from "./LoginForm/RegistrationForm/RegistrationForm";


const LoginModal: FC<ModalTypes> = ({removeModalWindow}) => {

    const modalType = useTypedSelector(state => state.modal.modalType)

    return (
        <div className={style.login}>
            <button className={style.close} onClick={removeModalWindow}><CloseSVG/></button>
            <article>
                <h3>Sign {modalType === ModalType.registration ? "up" : "in"}</h3>
                <p>{modalType === ModalType.registration ? "Registration takes less than a minute but gives you full control over your studying." : "Sign in to your account using email and password provided during registration."}</p>
            </article>
            {
                modalType === ModalType.registration ? <RegistrationForm/> : <SignInForm/>
            }
        </div>
    );
};

export default LoginModal;