import React, {FC} from 'react';
import {ReactComponent as ArrowRightIcon} from "./icons/arrowRigthSVG.svg"
import {ReactComponent as ArrowLeftIcon} from "./icons/arrowLeftSVG.svg"
import "./ControlButton.module.scss"

export enum ControlButtonRotation {
    left = "left",
    right = "right"
}

interface ControlButtonProps {
    rotation: ControlButtonRotation,
    onClick: () => void
}

const ControlButton: FC<ControlButtonProps> = ({rotation, onClick}) => {
    return (
        <button onClick={onClick}>
            {rotation === ControlButtonRotation.right ? <ArrowRightIcon/> : <ArrowLeftIcon/>}
        </button>
    );
};

export default ControlButton;