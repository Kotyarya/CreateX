import React, {FC, useEffect, useState} from 'react';
import style from "./podcastElement.module.scss";
import {IPodcastElement} from "../../Redux/API/blogsAPI";
import {imgUrl} from "../../utils/const/const";
import mask from "../../assets/Exclude.png"
import {ReactComponent as VolumeOnSVG} from "../../assets/img/icons/on.svg";
import {ReactComponent as VolumeOffSVG} from "../../assets/img/icons/off.svg";
import PlayButton, {PlayButtonSize} from "../PlayButton/PlayButton";

interface IPodcastElementProps {
    podcastElement: IPodcastElement
}

let audio: HTMLAudioElement
const PodcastElement: FC<IPodcastElementProps> = ({podcastElement}) => {
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const [playStatus, setPlayStatus] = useState(false)
    const [volume, setVolume] = useState(0.5)
    
    useEffect(() => {
        audio = new Audio(imgUrl + podcastElement.audio)
        audio.onloadedmetadata = () => {
            setDuration(audio.duration)
        }
        audio.ontimeupdate = () => {
            setCurrentTime(audio.currentTime)
        }

        return () => {
            audio.src = ""
            audio.pause()
            audio.currentTime = 0
        }
        // eslint-disable-next-line
    }, [podcastElement])

    const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
        audio.currentTime = Number(e.currentTarget.value)
        setCurrentTime(Number(e.currentTarget.value))
    }

    const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
        audio.volume = Number(e.currentTarget.value) / 100
        setVolume(Number(e.currentTarget.value) / 100)
    }

    const play = () => {
        if (playStatus) {
            setPlayStatus(false)
            audio.pause()
        } else {
            setPlayStatus(true)
            audio.play()
        }
    }

    return (
        <div className={style.podcastElement}>
            <div className={style.wrapper}>
                <div className={style.track}>
                    <PlayButton size={PlayButtonSize.small} onClick={play}/>
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