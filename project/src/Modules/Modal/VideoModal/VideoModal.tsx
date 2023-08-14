import React, {FC} from 'react';
import style from "./VideoModal.module.scss";
import {LoginModalProps} from "../LoginModal/LoginModal";
import {ReactComponent as CloseSVG} from "../../../assets/icons/other/Cross.svg";

const VideoModal: FC<LoginModalProps> = ({removeModalWindow}) => {
    return (
        <div className={style.video}>
            <button onClick={removeModalWindow}><CloseSVG/></button>
            <iframe src="https://www.youtube.com/embed/KnAEIEnnvAQ?controls=0"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
        </div>
    );
};

export default VideoModal;