import React, {FC} from 'react';
import style from "./BlogsCarousel.module.scss"
import ControlButton, {ControlButtonRotation} from "../../Components/ControlButton/ControlButton";
import BlogCard from "../../Components/BlogCard/BlogCard";
import {ButtonSize, ButtonVariant} from "../../Components/Button/ButtonTypes";
import Button from "../../Components/Button/Button";
import {useNavigateTo} from "../../hook/useNavigateTo";
import {BlogsCarouselTypes} from "./BlogsCarouselTypes";
import {useCarousel} from "../../hook/useCarousel";

const BlogsCarousel: FC<BlogsCarouselTypes> = ({blogs}) => {
    const {navigateToBlogsPage} = useNavigateTo()
    const {translate, onMoveForward, onMoveBack} = useCarousel(42)

    return (
        <div className={style.wrapper}>
            <div className={style.head}>
                <article>
                    <p>our blog</p>
                    <h2>You may also like</h2>
                </article>
                <div className={style.control}>
                    <ControlButton rotation={ControlButtonRotation.left} disabled={translate >= 0}
                                   onClick={onMoveBack}/>
                    <ControlButton rotation={ControlButtonRotation.right} disabled={translate <= -210}
                                   onClick={onMoveForward}/>
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
                <Button onClick={navigateToBlogsPage} text={"Go to blog"} variant={ButtonVariant.solid}
                        size={ButtonSize.large}/>
            </div>
        </div>
    );
};

export default BlogsCarousel;