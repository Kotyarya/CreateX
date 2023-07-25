import React from 'react';
import BlogsContainer from "../../Modules/Blogs/BlogsContainer";
import style from "./BlogsPage.module.scss"

const BlogsPage = () => {
    return (
        <div className={style.blogs}>
            <BlogsContainer/>
        </div>
    );
};

export default BlogsPage;