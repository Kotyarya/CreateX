import React, {FC} from 'react';
import style from "./BlogElement.module.scss"
import {nanoid} from "nanoid";
import {ReactComponent as BracesSVG} from "../../assets/icons/other/braces.svg";
import {BlogElementTypes} from "./BlogElementTypes";
import PodcastElementContainer from "../PodcastElement/PodcastElementContainer";


const BlogElement: FC<BlogElementTypes> = ({articleElement, videoElement, podcastElement}) => {
    if (articleElement) {
        return (
            <div className={style.articleElement}>
                <div className={style.article}>
                    <BracesSVG/>
                    <p>{articleElement.article}</p>
                </div>
                <p className={style.text}>{articleElement.text}</p>
                <ul>
                    {
                        articleElement.articleElementList.map((itemList) => <li key={nanoid(4)}>{itemList.text}</li>)
                    }
                </ul>
            </div>
        )
    } else if (videoElement) {
        const videoUrl = videoElement.url.replace("watch?v=", "embed/").slice(0, 41).replace("youtube", "youtube-nocookie")
        return (
            <div className={style.videoElement}>
                <iframe src={videoUrl}
                        title="YouTube video player"
                        allowFullScreen></iframe>
            </div>
        )
    } else if (podcastElement) {
        return (
            <PodcastElementContainer podcastElement={podcastElement}/>
        )
    } else {
        return <></>
    }
};

export default BlogElement;