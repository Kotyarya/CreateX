import React, {FC} from 'react';
import style from "./BlogAside.module.scss"
import SearchInput from "../../Components/Input/SearchInput/SearchInput";
import {imgUrl} from "../../utils/const/imgUrl";
import {ReactComponent as InstagramSVG} from "../../assets/icons/socialMedia/instagramSVG.svg";
import {ReactComponent as TwitterSVG} from "../../assets/icons/socialMedia/twitterSVG.svg";
import {ReactComponent as LinkedInSVG} from "../../assets/icons/socialMedia/linkedinSVG.svg";
import {nanoid} from "nanoid";
import {NavLink} from "react-router-dom";
import {markText} from "../../utils/helpers/markText";
import {BlogAsideTypes} from "./BlogAsideTypes";
import {useSkeleton} from "../../hook/useSkeleton";


const BlogAside: FC<BlogAsideTypes> = ({
                                           onChange,
                                           searchText,
                                           onFocus,
                                           onBlur,
                                           editMode,
                                           curator,
                                           blogType,
                                           blogs,
                                           tags,
                                           loading
                                       }) => {

    const img = curator ? imgUrl + curator.img : ""
    const skeletonAsideBlock = useSkeleton(1, 34.2, 90)

    return (
        <div className={style.wrapper}>
            <SearchInput width={34.2} placeholder={"Search blog..."} onChange={onChange} value={searchText}
                         onFocus={onFocus} onBlur={onBlur}/>
            {
                !editMode ?
                    loading ?
                        skeletonAsideBlock :
                        <>
                            <div className={style.curator}>
                                <article>author</article>
                                <div className={style.block}>
                                    <div className={style.img}>
                                        <img src={img} alt=""/>
                                    </div>
                                    <div className={style.info}>
                                        <div>
                                            <p className={style.name}>{curator?.name}</p>
                                            <p className={style.jobTitle}>{curator?.jobTitle}</p>
                                        </div>
                                        <div className={style.links}>
                                            <InstagramSVG/>
                                            <TwitterSVG/>
                                            <LinkedInSVG/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.trendingBlogs}>
                                <article>Trending {blogType}s</article>
                                {
                                    blogs?.map((blog, index) => {
                                        if (index <= 2) {
                                            return (
                                                <NavLink key={blog.id} to={`/blog/${blog.id}`}>
                                                    <div className={style.blog}>
                                                        <img src={imgUrl + blog.img} alt=""/>
                                                        <div className={style.info}>
                                                            <p className={style.date}>{blog.month} {blog.day}</p>
                                                            <p className={style.title}>{blog.title}</p>
                                                        </div>
                                                    </div>
                                                </NavLink>
                                            )
                                        } else {
                                            return null
                                        }
                                    })
                                }
                            </div>
                            <div className={style.tags}>
                                <article>tags</article>
                                <div className={style.content}>
                                    {
                                        tags?.map((tag) => <div key={nanoid(10)}>{tag.text}</div>)
                                    }
                                </div>
                            </div>
                        </>
                    :
                    <div className={style.searchBlogs}>
                        {
                            blogs?.map((blog, index) => {
                                return (
                                    <NavLink key={blog.id} to={`/blog/${blog.id}`}>
                                        <div className={style.blog}>
                                            <img src={imgUrl + blog.img} alt=""/>
                                            <div className={style.info}>
                                                <p className={style.date}>{blog.month} {blog.day}</p>
                                                {markText(blog.title, searchText, style.title)}
                                            </div>
                                        </div>
                                    </NavLink>
                                )
                            })
                        }
                    </div>
            }
        </div>
    );
};

export default BlogAside;