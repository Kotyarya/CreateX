import React, {FC} from 'react';
import {ReactComponent as Icon} from "../../assets/img/icons/playSVG.svg"
import style from "./PlayButton.module.scss"

export enum PlayButtonSize {
    large = "large",
    small = "small"
}

interface PlayButtonProps {
    size: PlayButtonSize,
    onClick?: () => void
}

const PlayButton: FC<PlayButtonProps> = ({size, onClick}) => {
    return (
        <button onClick={onClick} className={style.PlayButton + " " + style[size]}>
            <Icon/>
            <span></span>
        </button>
    );
};

export default PlayButton;