import React, {FC} from 'react';
import {ReactComponent as ArrowRightIcon} from "../../assets/img/icons/arrowRigthSVG.svg"
import {ReactComponent as ArrowLeftIcon} from "../../assets/img/icons/arrowLeftSVG.svg"
import style from "./ControlButton.module.scss"

export enum ControlButtonRotation {
    left = "left",
    right = "right"
}

interface ControlButtonProps {
    rotation: ControlButtonRotation,
    onClick?: () => void,
    disabled: boolean
}

const ControlButton: FC<ControlButtonProps> = ({rotation, onClick, disabled}) => {
    return (
        <button disabled={disabled} onClick={onClick} className={style.controlButton}>
            {rotation === ControlButtonRotation.right ? <ArrowRightIcon/> : <ArrowLeftIcon/>}
        </button>
    );
};

export default ControlButton;