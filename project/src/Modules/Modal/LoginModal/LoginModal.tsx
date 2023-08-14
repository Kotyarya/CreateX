import React, {FC} from 'react';
import style from "./LoginModal.module.scss";

export interface LoginModalProps {
    removeModalWindow: () => void
}

const LoginModal: FC<LoginModalProps> = ({removeModalWindow}) => {
    return (
        <div className={style.login}>
            <button onClick={removeModalWindow}>Login</button>
        </div>
    );
};

export default LoginModal;