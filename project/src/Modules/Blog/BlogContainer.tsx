import React, {ReactComponentElement} from 'react';
import Blog from "./Blog";
import {useTypedSelector} from "../../hook/useTypedSelector";
import {ReactComponent as ArticleSVG} from "../../assets/icons/blogLabel/Article.svg";
import {ReactComponent as VideoSVG} from "../../assets/icons/blogLabel/Video.svg";
import {ReactComponent as PodcastSVG} from "../../assets/icons/blogLabel/Podcast.svg";

const BlogContainer = () => {
    const blog = useTypedSelector(state => state.blogs.activeBlog)
    let svg: null | ReactComponentElement<typeof ArticleSVG | typeof VideoSVG | typeof PodcastSVG> = null
    let time: null | string = null

    if (blog?.blogTypeId === 1) {
        svg = <ArticleSVG/>
    } else if (blog?.blogTypeId === 2) {
        svg = <VideoSVG/>
        time = `${blog.videoElement?.time} min watch`
    } else if (blog?.blogTypeId === 3) {
        svg = <PodcastSVG/>
        time = `${blog.podcastElement?.time} min listen`
    }

    return <Blog blog={blog} svg={svg} time={time}/>
};

export default BlogContainer;