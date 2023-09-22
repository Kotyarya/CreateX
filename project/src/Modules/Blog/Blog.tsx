import React, {FC} from 'react';
import style from "./Blog.module.scss"
import {imgUrl} from "../../utils/const/imgUrl";

import {ReactComponent as FacebookSVG} from "../../assets/icons/socialMedia/facebookSVG.svg";
import {ReactComponent as TwitterSVG} from "../../assets/icons/socialMedia/twitterSVG.svg";
import {ReactComponent as LinkedInSVG} from "../../assets/icons/socialMedia/linkedinSVG.svg";
import BlogElement from "../../Components/BlogElement/BlogElement";
import {nanoid} from "nanoid";
import {BlogTypes} from "./BlogTypes";
import {useSkeleton} from "../../hook/useSkeleton";


const Blog: FC<BlogTypes> = ({blog, svg, time, loading}) => {

    const skeletonTypeBlock = useSkeleton(1, 16.7, 2.2)
    const skeletonTitleBlock = useSkeleton(1, 81, 10)
    const skeletonImgBlock = useSkeleton(1, 81, 37)

    return (
        <div className={style.wrapper}>
            {
                loading ?
                    <div style={{marginBottom: "1.2rem"}}>{skeletonTypeBlock}</div> :
                    <div className={style.type}>{svg} {blog?.blogType.name} <span>{blog?.branch.name}</span></div>
            }
            {
                loading ?
                    <div style={{marginBottom: "4rem"}}>{skeletonTitleBlock}</div> :
                    <h2>{blog?.title}</h2>
            }
            {
                loading ?
                    null :
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
                    </div>}
            {
                loading ?
                    <div style={{marginBottom: "4rem"}}>{skeletonImgBlock}</div> :
                    <img src={
                        blog ?
                            imgUrl + blog.img
                            : ""
                    } alt=""/>
            }
            {
                loading ?
                    null :
                    <>
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
                                    blog?.branch.tags.map((tag, index) => index < 3 ?
                                        <div key={nanoid(10)}>{tag.text}</div> : null)
                                }
                            </div>
                            <div className={style.share}>
                                <p>Share:</p>
                                <FacebookSVG/>
                                <TwitterSVG/>
                                <LinkedInSVG/>
                            </div>
                        </div>
                    </>
            }
        </div>
    );
};

export default Blog;