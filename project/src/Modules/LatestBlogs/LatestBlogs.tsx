import React, {useEffect} from 'react';
import style from "./LatestBlogs.module.scss"
import {useTypedSelector} from "../../hook/useTypedSelector";
import {useAction} from "../../hook/useAction";
import Button, {ButtonSize, ButtonVariant} from "../../Components/Button/Button";
import BlogCard from "../../Components/BlogCard/BlogCard";
import {NavLink} from "react-router-dom";

const LatestBlogs = () => {
    const blogs = useTypedSelector(state => state.blogs.blogs)
    const {getBlogs} = useAction()

    useEffect(() => {
        getBlogs(1, 0, 0, "")
        // eslint-disable-next-line
    }, [])


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
                    blogs?.map((blog, index) => index < 3 ?
                        <BlogCard blog={blog} staticSize={true} searchText={""}/> : null)
                }
            </div>
        </div>
    );
};

export default LatestBlogs;