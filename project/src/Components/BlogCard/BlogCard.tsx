import React, {FC} from 'react';
import {imgUrl} from "../../utils/const/imgUrl";
import style from "./BlogCard.module.scss"
import {ReactComponent as ArrowSVG} from "../../assets/icons/other/Right.svg";
import {ReactComponent as ArticleSVG} from "../../assets/icons/blogLabel/Article.svg";
import {ReactComponent as VideoSVG} from "../../assets/icons/blogLabel/Video.svg";
import {ReactComponent as PodcastSVG} from "../../assets/icons/blogLabel/Podcast.svg";
import {markText} from "../../utils/helpers/markText";
import {IBlog} from "../../Redux/Other/Types/blogsTypes";
import {useNavigateTo} from "../../hook/useNavigateTo";

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

    const {navigateToBlogPage} = useNavigateTo()

    const onNavigateToBlogPage = () => {
        navigateToBlogPage(blog.id)
    }

    return (
        <div key={blog.id} className={style.wrapper} style={staticSize ? {
            minWidth: "39rem",
            minHeight: "50.7rem",
            maxWidth: "39rem",
            maxHeight: "50.7rem"
        } : undefined}>
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
                <p className={style.link} onClick={onNavigateToBlogPage}>{navLinkText} <ArrowSVG/></p>
            </div>
        </div>
    );
};

export default BlogCard;