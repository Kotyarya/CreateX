import React, {FC} from 'react';
import style from "./Button.module.scss"
import {ReactComponent as Icon} from "../../assets/icons/arrows/arrowRigthSVG.svg"
import {ButtonTypes} from "./ButtonTypes";


const Button: FC<ButtonTypes> = ({text, disabled, size, variant, onClick, withIcon, type}) => {
    return (
        <button type={type}
                className={style.button + " " + style[variant] + " " + style[size]}
                onClick={onClick}
                disabled={disabled}
        >

            {text}
            {withIcon ? <Icon/> : null}

        </button>
    );
};

export default Button;