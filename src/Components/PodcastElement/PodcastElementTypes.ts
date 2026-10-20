import React from "react";
import {IPodcastElement} from "../../Redux/Other/Types/blogsTypes";

export interface PodcastElementTypes {
    play: () => void,
    playStatus: boolean,
    duration: number,
    currentTime: number,
    changeCurrentTime: (e: React.ChangeEvent<HTMLInputElement>) => void,
    volume: number,
    changeVolume: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export interface PodcastElementContainerTypes {
    podcastElement: IPodcastElement
}
