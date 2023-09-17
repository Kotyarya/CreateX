import React, {FC} from 'react';
import style from "./LoginModal.module.scss";
import {ModalTypes} from "../ModalTypes";


const LoginModal: FC<ModalTypes> = ({removeModalWindow}) => {
    return (
        <div className={style.login}>
            <button onClick={removeModalWindow}>Login</button>
        </div>
    );
};

export default LoginModal;