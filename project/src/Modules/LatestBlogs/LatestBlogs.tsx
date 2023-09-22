import React, {FC} from 'react';
import style from "./LatestBlogs.module.scss"
import Button from "../../Components/Button/Button";
import BlogCard from "../../Components/BlogCard/BlogCard";
import {NavLink} from "react-router-dom";
import {ButtonSize, ButtonVariant} from "../../Components/Button/ButtonTypes";
import {LatestBlogsTypes} from "./LatestBlogsTypes";
import {useSkeleton} from "../../hook/useSkeleton";

const LatestBlogs: FC<LatestBlogsTypes> = ({blogs, loading}) => {

    const skeletonBlocks = useSkeleton(3, 39, 50.7)

    const blogBlocks = blogs?.map((blog, index) => index < 3 ?
        <BlogCard key={blog.id} blog={blog} staticSize={true} searchText={""}/> : null)

    return (
        <div className={style.wrapper}>
            <div className={style.head}>
                <article>
                    <p>out blog</p>
                    <h2>Latest posts</h2>
                </article>
                <NavLink to={"/blog"}>
                    <Button text={"Go to Blog"} variant={ButtonVariant.solid} size={ButtonSize.large}/>
                </NavLink>
            </div>
            <div className={style.content}>
                {
                    loading ?
                        skeletonBlocks :
                        blogBlocks
                }
            </div>
        </div>
    );
};

export default LatestBlogs;