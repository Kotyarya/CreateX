import React, {FC} from 'react';
import style from "./Button.module.scss"
import {ReactComponent as Icon} from "./icons/arrowSvg.svg"

export enum ButtonVariant {
    solid = "solid",
    outline = "outline",
}

export enum ButtonSize {
    large = "large",
    regular = "regular",
    small = "small"
}

interface ButtonProps {
    text: string,
    disabled?: boolean,
    variant: ButtonVariant,
    size: ButtonSize,
    onClick: () => void,
    withIcon?: boolean
}


const Button: FC<ButtonProps> = ({text, disabled, size, variant, onClick, withIcon}) => {
    return (
        <button className={style.button + " " + style[variant] + " " + style[size]}
                onClick={onClick}
                disabled={disabled}
        >
            {text}
            {withIcon ? <Icon/> : null}

        </button>
    );
};

export default Button;