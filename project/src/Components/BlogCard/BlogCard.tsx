import React, {FC} from 'react';
import {IBlog} from "../../Redux/API/blogsAPI";
import {imgUrl} from "../../utils/const/const";
import style from "./BlogCard.module.scss"
import {NavLink} from "react-router-dom";
import {ReactComponent as ArrowSVG} from "../../assets/img/icons/Right.svg";
import {ReactComponent as ArticleSVG} from "../../assets/img/icons/Article.svg";
import {ReactComponent as VideoSVG} from "../../assets/img/icons/Video.svg";
import {ReactComponent as PodcastSVG} from "../../assets/img/icons/Podcast.svg";
import {markText} from "../../utils/helpers/markText";

interface BlogCardProps {
    blog: IBlog,
    staticSize: boolean,
    searchText: string
}

const BlogCard: FC<BlogCardProps> = ({blog, staticSize, searchText}) => {

    let navLinkText = ""
    let time: number | null = null
    let svg = null

    if (blog.blogType.name === "Article") {
        navLinkText = "Read"
        svg = <ArticleSVG/>
    } else if (blog.blogType.name === "Video") {
        navLinkText = "Watch"
        time = blog.videoElement?.time || null
        svg = <VideoSVG/>
    } else if (blog.blogType.name === "Podcast") {
        navLinkText = "Listen"
        time = blog.podcastElement?.time || null
        svg = <PodcastSVG/>
    }


    return (
        <div className={style.wrapper} style={staticSize ? {width: "39rem", height: "50.7rem"} : undefined}>
            <div className={style.label}>{svg} {blog.blogType.name}</div>
            <img src={imgUrl + blog.img} alt=""/>
            <div className={style.content}>
                <div className={style.info}>
                    <p className={style.branch}>{blog.branch.name}</p>
                    <div className={style.date}>
                        <p>{blog.month} {blog.day}</p>
                    </div>
                    {
                        time ?
                            <div className={style.time}><p>{time} min</p></div>
                            : null
                    }
                </div>
                {markText(blog.title, searchText || "", style.title)}
                <p className={style.description}>{blog.mainText}</p>
                <NavLink className={style.link} to={`/blog/${blog.id}`}>{navLinkText} <ArrowSVG/></NavLink>
            </div>
        </div>
    );
};

export default BlogCard;