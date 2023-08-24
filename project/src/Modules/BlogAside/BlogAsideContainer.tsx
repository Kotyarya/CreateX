import React, {useEffect, useState} from 'react';
import BlogAside from "./BlogAside";
import {useAction} from "../../hook/useAction";
import {useTypedSelector} from "../../hook/useTypedSelector";

const BlogAsideContainer = () => {
    const {getActiveCurators, getBlogs} = useAction()
    const curatorId = useTypedSelector(state => state.blogs.activeBlog?.curatorId)
    const curator = useTypedSelector(state => state.curators.activeCurators)
    const blogTypeId = useTypedSelector(state => state.blogs.activeBlog?.blogTypeId)
    const tags = useTypedSelector(state => state.blogs.activeBlog?.branch.tags)
    const blogType = useTypedSelector(state => state.blogs.activeBlog?.blogType.name)
    const blogs = useTypedSelector(state => state.blogs.blogs)
    const [searchText, setSearchText] = useState<string>("")
    const [editMode, setEditMode] = useState<boolean>(false)

    useEffect(() => {
        if (curatorId) {
            getActiveCurators(curatorId)
        }
        getBlogs(1, blogTypeId || 0, 0, "")
        // eslint-disable-next-line
    }, [curatorId, blogTypeId])

    useEffect(() => {
        getBlogs(1, 0, 0, searchText)
        // eslint-disable-next-line
    }, [searchText])

    const onFocus = () => {
        setEditMode(true)
    }
    const onBlur = () => {
        setTimeout(() => {
            setEditMode(false)
        }, 500)

    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value)
    }


    return <BlogAside blogs={blogs}
                      blogType={blogType}
                      onBlur={onBlur}
                      onFocus={onFocus}
                      onChange={onChange}
                      searchText={searchText}
                      curator={curator}
                      tags={tags}
                      editMode={editMode}/>

};

export default BlogAsideContainer;