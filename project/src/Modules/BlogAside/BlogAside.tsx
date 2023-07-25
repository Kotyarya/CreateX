import React, {useEffect} from 'react';
import style from "./BlogAside.module.scss"
import SearchInput from "../../Components/Input/SearchInput/SearchInput";
import {useAction} from "../../hook/useAction";
import {useTypedSelector} from "../../hook/useTypedSelector";
import {imgUrl} from "../../utils/const/const";
import {ReactComponent as InstagramSVG} from "../../assets/img/icons/instagramSVG.svg";
import {ReactComponent as TwitterSVG} from "../../assets/img/icons/twitterSVG.svg";
import {ReactComponent as LinkedInSVG} from "../../assets/img/icons/linkedinSVG.svg";
import {nanoid} from "nanoid";
import {NavLink} from "react-router-dom";

const BlogAside = () => {

    const {getActiveCurators, getBlogs} = useAction()
    const curatorId = useTypedSelector(state => state.blogs.activeBlog?.curatorId)
    const curator = useTypedSelector(state => state.curators.activeCurators)
    const blogTypeId = useTypedSelector(state => state.blogs.activeBlog?.blogTypeId)
    const tags = useTypedSelector(state => state.blogs.activeBlog?.branch.tags)
    const blogType = useTypedSelector(state => state.blogs.activeBlog?.blogType.name)
    const blogs = useTypedSelector(state => state.blogs.blogs)

    useEffect(() => {
        if (curatorId) {
            getActiveCurators(curatorId)
        }
        getBlogs(1, blogTypeId || 0, 0, "")
        // eslint-disable-next-line
    }, [curatorId, blogTypeId])


    return (
        <div className={style.wrapper}>
            <SearchInput width={34.2} placeholder={"Search blog..."} onChange={() => {
            }} value={""}/>
            <div className={style.curator}>
                <article>author</article>
                <div className={style.block}>
                    <div className={style.img}>
                        <img src={
                            curator ?
                                imgUrl + curator.img
                                : ""
                        } alt=""/>
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
        </div>
    );
};

export default BlogAside;