import React from 'react';
import BlogsContainer from "../../Modules/Blogs/BlogsContainer";
import style from "./BlogsPage.module.scss"
import SubscribeNewsletterContainer from "../../Modules/SubscribeNewsletter/SubscribeNewsletterContainer";

const BlogsPage = () => {
    document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })

    return (
        <div className={style.blogs}>
            <div className={style.blogsContent}>
                <BlogsContainer/>
            </div>
            <div className={style.subscribe}>
                <SubscribeNewsletterContainer/>
            </div>
        </div>
    );
};

export default BlogsPage;