import React, {FC, useEffect, useState} from 'react';
import style from "./podcastElement.module.scss";
import {IPodcastElement} from "../../Redux/API/blogsAPI";
import {imgUrl} from "../../utils/const/const";
import PlayButton, {PlayButtonSize} from "../PlayButton/PlayButton";

// import mask from "../../assets/Exclude.png"

interface i {
    height: number,
    value: number
}

const generateTrackBarConfig = (time: number) => {
    const arr: i[] = [{height: 5, value: 0}]
    for (let i = 1; i < 50; i++) {
        const obj = {
            height: Math.random() * (11 - 1) + 1,
            value: (time / 50) * i
        }
        arr.push(obj)
    }
    return arr
}

interface IPodcastElementProps {
    podcastElement: IPodcastElement
}

let audio: HTMLAudioElement;

const PodcastElement: FC<IPodcastElementProps> = ({podcastElement}) => {
    const [trackBarConfig, setTrackBarConfig] = useState<i[]>([])
    const [currentTime, setCurrentTime] = useState(0)
    const [playStatus, setPlayStatus] = useState(false)

    useEffect(() => {
        audio = new Audio(imgUrl + podcastElement.audio)
        audio.onloadedmetadata = () => {
            setTrackBarConfig([...trackBarConfig, ...generateTrackBarConfig(Math.floor(audio.duration))])
        }
        audio.ontimeupdate = () => {
            setCurrentTime(audio.currentTime)
        }
        // eslint-disable-next-line
    }, [])


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
            <div className={style.track}>
                <PlayButton size={PlayButtonSize.small} onClick={play}/>
                {/*<img src={mask} alt=""/>    */}
                <input type="range"></input>
            </div>

        </div>
    );
};

export default PodcastElement;