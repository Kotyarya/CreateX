import React, {FC} from 'react';
import style from "./Button.module.scss"
import {ReactComponent as Icon} from "../../assets/img/icons/arrowSvg.svg"

export enum ButtonVariant {
    solid = "solid",
    outline = "outline",
}

export enum ButtonSize {
    large = "large",
    regular = "regular",
    small = "small"
}

export enum ButtonType {
    submit = "submit"
}

interface ButtonProps {
    text: string,
    disabled?: boolean,
    variant: ButtonVariant,
    size: ButtonSize,
    onClick?: () => void,
    withIcon?: boolean,
    type?: ButtonType
}


const Button: FC<ButtonProps> = ({text, disabled, size, variant, onClick, withIcon, type}) => {
    return (
        <button type={type} className={style.button + " " + style[variant] + " " + style[size]}
                onClick={onClick}
                disabled={disabled}
        >
            {text}
            {withIcon ? <Icon/> : null}

        </button>
    );
};

export default Button;