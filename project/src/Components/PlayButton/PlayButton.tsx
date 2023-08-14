import React, {FC} from 'react';
import {ReactComponent as PlaySVG} from "../../assets/icons/other/playSVG.svg"
import {ReactComponent as PauseSVG} from "../../assets/icons/other/pauseSVG.svg"
import style from "./PlayButton.module.scss"

export enum PlayButtonSize {
    large = "large",
    small = "small"
}

interface PlayButtonProps {
    size: PlayButtonSize,
    onClick?: () => void,
    pause?: boolean
}

const PlayButton: FC<PlayButtonProps> = ({size, onClick, pause}) => {

    const icon = pause === undefined || !pause ? <PlaySVG/> : <PauseSVG/>

    return (
        <button onClick={onClick} className={style.PlayButton + " " + style[size]}>
            {icon}
            <span></span>
        </button>
    );
};

export default PlayButton;