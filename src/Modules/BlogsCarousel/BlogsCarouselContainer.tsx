import React, {FC} from 'react';
import BlogsCarousel from "./BlogsCarousel";
import {useTypedSelector} from "../../hook/useTypedSelector";

const BlogsCarouselContainer: FC = () => {
    const blogs = useTypedSelector(state => state.blogs.blogs)

    return <BlogsCarousel blogs={blogs}/>
};

export default BlogsCarouselContainer;