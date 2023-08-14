import React, {ReactComponentElement} from 'react';
import style from "./Blog.module.scss"
import {useTypedSelector} from "../../hook/useTypedSelector";
import {imgUrl} from "../../utils/const/imgUrl";
import {ReactComponent as ArticleSVG} from "../../assets/icons/blogLabel/Article.svg";
import {ReactComponent as VideoSVG} from "../../assets/icons/blogLabel/Video.svg";
import {ReactComponent as PodcastSVG} from "../../assets/icons/blogLabel/Podcast.svg";
import {ReactComponent as FacebookSVG} from "../../assets/icons/socialMedia/facebookSVG.svg";
import {ReactComponent as TwitterSVG} from "../../assets/icons/socialMedia/twitterSVG.svg";
import {ReactComponent as LinkedInSVG} from "../../assets/icons/socialMedia/linkedinSVG.svg";
import BlogElement from "../../Components/BlogElement/BlogElement";
import {nanoid} from "nanoid";

const Blog = () => {
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

    return (
        <div className={style.wrapper}>
            <div className={style.type}>{svg} {blog?.blogType.name} <span>{blog?.branch.name}</span></div>
            <h2>{blog?.title}</h2>
            <div className={style.info}>
                <div className={style.dateTime}>
                    <p className={style.date}>{blog?.month} {blog?.day}</p>
                    {
                        time ?
                            <p className={style.time}>{time}</p>
                            : time}
                </div>
                <div className={style.share}>
                    <p>Share:</p>
                    <FacebookSVG/>
                    <TwitterSVG/>
                    <LinkedInSVG/>
                </div>
            </div>
            <img src={
                blog ?
                    imgUrl + blog.img
                    : ""
            } alt=""/>
            <div className={style.text}>
                <p className={style.mainText}>{blog?.mainText}</p>
                <p className={style.firstText}>{blog?.firstText}</p>
                <p className={style.secondText}>{blog?.secondText}</p>
            </div>
            <BlogElement articleElement={blog?.articleElement || null}
                         videoElement={blog?.videoElement || null}
                         podcastElement={blog?.podcastElement || null}/>
            <p className={style.summary}>{blog?.summary}</p>
            <div className={style.shareTagsWrapper}>
                <div className={style.tags}>
                    <p>Tags:</p>
                    {
                        blog?.branch.tags.map((tag, index) => index < 3 ? <div key={nanoid(10)}>{tag.text}</div> : null)
                    }
                </div>
                <div className={style.share}>
                    <p>Share:</p>
                    <FacebookSVG/>
                    <TwitterSVG/>
                    <LinkedInSVG/>
                </div>
            </div>
        </div>
    );
};

export default Blog;