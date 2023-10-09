import React, {FC} from 'react';
import style from "./LoginModal.module.scss";
import {ModalTypes} from "../ModalTypes";
import {ReactComponent as CloseSVG} from "../../../assets/icons/other/Cross.svg";
import SignInForm from "./LoginForm/SignInForm/SignInForm";


const LoginModal: FC<ModalTypes> = ({removeModalWindow}) => {
    return (
        <div className={style.login}>
            <button className={style.close} onClick={removeModalWindow}><CloseSVG/></button>
            <article>
                <h3>Sign in</h3>
                <p>Sign in to your account using email and password provided during registration.</p>
            </article>
            <SignInForm/>
        </div>
    );
};

export default LoginModal;