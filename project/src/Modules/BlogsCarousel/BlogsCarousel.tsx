import React, {useState} from 'react';
import style from "./BlogsCarousel.module.scss"
import ControlButton, {ControlButtonRotation} from "../../Components/ControlButton/ControlButton";
import {useTypedSelector} from "../../hook/useTypedSelector";
import BlogCard from "../../Components/BlogCard/BlogCard";
import {NavLink} from "react-router-dom";
import {ButtonSize, ButtonVariant} from "../../Components/Button/ButtonTypes";
import Button from "../../Components/Button/Button";

const BlogsCarousel = () => {
    const blogs = useTypedSelector(state => state.blogs.blogs)
    const [translate, setTranslate] = useState(0)


    return (
        <div className={style.wrapper}>
            <div className={style.head}>
                <article>
                    <p>our blog</p>
                    <h2>You may also like</h2>
                </article>
                <div className={style.control}>
                    <ControlButton rotation={ControlButtonRotation.left} disabled={translate >= 0}
                                   onClick={() => setTranslate(translate + 42)}/>
                    <ControlButton rotation={ControlButtonRotation.right} disabled={translate <= -210}
                                   onClick={() => setTranslate(translate - 42)}/>
                </div>
            </div>
            <div className={style.content}>
                <div className={style.carousel} style={{transform: `translateX(${translate}rem)`}}>
                    {
                        blogs?.map((blog) => <BlogCard key={blog.id} blog={blog} staticSize={true} searchText={""}/>)
                    }
                </div>
            </div>
            <div className={style.more}>
                <p>Do you want more articles, podcasts and videos?</p>
                <NavLink to={"/blog"}>
                    <Button text={"Go to blog"} variant={ButtonVariant.solid} size={ButtonSize.large}/>
                </NavLink>
            </div>
        </div>
    );
};

export default BlogsCarousel;