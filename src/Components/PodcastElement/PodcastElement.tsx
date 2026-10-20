import React, {FC} from 'react';
import style from "./PodcastElement.module.scss";
import mask from "../../assets/mask/Exclude.png"
import {ReactComponent as VolumeOnSVG} from "../../assets/icons/other/on.svg";
import {ReactComponent as VolumeOffSVG} from "../../assets/icons/other/off.svg";
import {PlayButtonSize} from "../PlayButton/PlayButtonTypes";
import PlayButton from "../PlayButton/PlayButton";
import {PodcastElementTypes} from "./PodcastElementTypes";


const PodcastElement: FC<PodcastElementTypes> = ({
                                                     play,
                                                     playStatus,
                                                     duration,
                                                     currentTime,
                                                     changeCurrentTime,
                                                     volume,
                                                     changeVolume
                                                 }) => {

    return (
        <div className={style.podcastElement}>
            <div className={style.wrapper}>
                <div className={style.track}>
                    <PlayButton size={PlayButtonSize.small} onClick={play} pause={playStatus}/>
                    <div className={style.trackBar}>
                        <img src={mask} alt=""/>
                        <input min={0} max={duration} value={currentTime} onChange={changeCurrentTime}
                               type="range"></input>
                    </div>
                </div>
                <div className={style.volume}>
                    {volume === 0 ? <VolumeOffSVG/> : <VolumeOnSVG/>}
                    <input min={0} max={100} type="range" onChange={changeVolume}></input>
                </div>
            </div>

        </div>
    );
};

export default PodcastElement;