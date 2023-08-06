import React, {useEffect} from 'react';
import style from "./BlogPage.module.scss"
import BlogContainer from "../../../Modules/Blog/BlogContainer";
import {useBlogId} from "../../../hook/useBlogId";
import {useAction} from "../../../hook/useAction";
import BlogAsideContainer from "../../../Modules/BlogAside/BlogAsideContainer";
import SubscribeNewsletterContainer from "../../../Modules/SubscribeInEventPage/SubscribeNewsletterContainer";
import BlogsCarouselContainer from "../../../Modules/BlogsCarousel/BlogsCarouselContainer";

const BlogPage = () => {

    const blogId = useBlogId()
    const {getActiveBlog} = useAction()

    useEffect(() => {
        getActiveBlog(blogId)
        // eslint-disable-next-line
    }, [blogId])


    return (
        <div className={style.blogPage}>
            <div className={style.blog}>
                <div className={style.content}>
                    <BlogContainer/>
                </div>
                <div className={style.aside}>
                    <BlogAsideContainer/>
                </div>
            </div>
            <div className={style.subscribeNewsletter}>
                <SubscribeNewsletterContainer/>
            </div>
            <div className={style.blogsCarousel}>
                <BlogsCarouselContainer/>
            </div>
        </div>
    );
};

export default BlogPage;