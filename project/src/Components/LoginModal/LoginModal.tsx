import React, {FC} from 'react';
import style from "./LoginModal.module.scss"

interface LoginModalProps {
    closeModal: () => void
}

const LoginModal: FC<LoginModalProps> = ({closeModal}) => {
    return (
        <div className={style.wrapper}>
            <div className={style.login}>
                <button onClick={closeModal}>Hello</button>
            </div>
        </div>
    );
};

export default LoginModal;