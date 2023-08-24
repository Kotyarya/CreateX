import React, {FC, useEffect, useState} from 'react';
import PodcastElement from "./PodcastElement";
import {imgUrl} from "../../utils/const/imgUrl";
import {PodcastElementContainerTypes} from "./PodcastElementTypes";


let audio: HTMLAudioElement
const PodcastElementContainer: FC<PodcastElementContainerTypes> = ({podcastElement}) => {
    const [currentTime, setCurrentTime] = useState<number>(0)
    const [duration, setDuration] = useState<number>(0)
    const [playStatus, setPlayStatus] = useState<boolean>(false)
    const [volume, setVolume] = useState<number>(0.5)

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


    return <PodcastElement duration={duration}
                           changeCurrentTime={changeCurrentTime}
                           currentTime={currentTime}
                           changeVolume={changeVolume}
                           volume={volume} play={play}
                           playStatus={playStatus}/>
};

export default PodcastElementContainer;