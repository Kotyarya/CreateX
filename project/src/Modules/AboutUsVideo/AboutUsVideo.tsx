import React, {useState} from 'react';
import video from '../../assets/video/video.mp4'
import ReactPlayer from "react-player";
import style from "./AboutUsVideo.module.scss"
import PlayButton, {PlayButtonSize} from "../../Components/PlayButton/PlayButton";

const AboutUsVideo = () => {
    const [playing, setPlaying] = useState(false)

    const onPlay = () => {
        setPlaying(!playing)
    }

    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <div className={style.play}>
                    <PlayButton size={PlayButtonSize.small} onClick={onPlay} pause={playing}/>
                    <p>Watch Video</p>
                </div>
                <ReactPlayer width={"91rem"} height={"54rem"} url={video} playing={playing}></ReactPlayer>
            </div>
            <div className={style.info}>
                <div className={style.block}>
                    <h3>1200</h3>
                    <p>students graduated</p>
                </div>
                <div className={style.block}>
                    <h3>84</h3>
                    <p>completed courses</p>
                </div>
                <div className={style.block}>
                    <h3>16</h3>
                    <p>qualified tutors</p>
                </div>
                <div className={style.block}>
                    <h3>5</h3>
                    <p>years of experience</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUsVideo;