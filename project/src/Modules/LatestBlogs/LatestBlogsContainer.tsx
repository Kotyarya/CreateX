import React, {useEffect} from 'react';
import LatestBlogs from "./LatestBlogs";
import {useTypedSelector} from "../../hook/useTypedSelector";
import {useAction} from "../../hook/useAction";

const LatestBlogsContainer = () => {
    const {blogs, loading} = useTypedSelector(state => state.blogs)
    const {getBlogs} = useAction()

    useEffect(() => {
        getBlogs(1, 0, 0, "")
        // eslint-disable-next-line
    }, [])

    return <LatestBlogs blogs={blogs} loading={loading}/>
};

export default LatestBlogsContainer;