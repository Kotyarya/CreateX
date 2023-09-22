import React, {ReactComponentElement} from 'react';
import Blog from "./Blog";
import {useTypedSelector} from "../../hook/useTypedSelector";
import {ReactComponent as ArticleSVG} from "../../assets/icons/blogLabel/Article.svg";
import {ReactComponent as VideoSVG} from "../../assets/icons/blogLabel/Video.svg";
import {ReactComponent as PodcastSVG} from "../../assets/icons/blogLabel/Podcast.svg";

const BlogContainer = () => {
    const {activeBlog, loading} = useTypedSelector(state => state.blogs)
    let svg: null | ReactComponentElement<typeof ArticleSVG | typeof VideoSVG | typeof PodcastSVG> = null
    let time: null | string = null

    if (activeBlog?.blogTypeId === 1) {
        svg = <ArticleSVG/>
    } else if (activeBlog?.blogTypeId === 2) {
        svg = <VideoSVG/>
        time = `${activeBlog.videoElement?.time} min watch`
    } else if (activeBlog?.blogTypeId === 3) {
        svg = <PodcastSVG/>
        time = `${activeBlog.podcastElement?.time} min listen`
    }

    return <Blog blog={activeBlog} svg={svg} time={time} loading={loading}/>
};

export default BlogContainer;