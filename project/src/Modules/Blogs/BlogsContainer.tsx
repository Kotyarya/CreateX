import React, {useEffect, useState} from 'react';
import Blogs from "./Blogs";
import {useTypedSelector} from "../../hook/useTypedSelector";
import {useAction} from "../../hook/useAction";
import {OptionsType} from "../../Components/Select/SelectTypes";

const BlogsContainer = () => {

    const [searchText, setSearchText] = useState<string>("")
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [randomNumberForGridArea, setRandomNumberForGridArea] = useState<number>(0)
    const [activeBranch, setActiveBranch] = useState<OptionsType<number>>({value: 0, label: "All themes"})


    const {blogs, blogTypes, activeBlogType, count} = useTypedSelector(state => state.blogs)
    const {branches} = useTypedSelector(state => state.branches)


    const {getBlogs, getBlogTypes, setActiveBlogType, getBranches} = useAction()


    const onChangeSearchTextInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value)
    }

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        setRandomNumberForGridArea(Math.floor(Math.random() * 3))
    }, [activeBlogType, currentPage, activeBranch])

    useEffect(() => {
        getBlogTypes()
        getBranches()
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        getBlogs(currentPage, activeBlogType, activeBranch.value, searchText)
        // eslint-disable-next-line
    }, [activeBlogType, currentPage, activeBranch, searchText])


    let pages: number[];
    pages = [];
    for (let i = 1; i <= Math.ceil(count / 8); i++) {
        pages.push(i)
    }

    const onClickBlogTypeButtons = (blogTypeId: number) => {
        setActiveBlogType(blogTypeId)
    }

    const onChangePage = (num: number) => {
        setCurrentPage(currentPage + num)
    }

    const onClickSetPage = (page: number) => {
        setCurrentPage(page)
    }

    const optionsBlogBranch = branches?.map((branch) => ({
        value: branch.id,
        label: branch.name
    }))

    optionsBlogBranch?.push({value: 0, label: "All themes"})

    const onChangeBlogBranch = (newValue: OptionsType<number>) => {
        setCurrentPage(1)
        setActiveBranch(newValue)
    }

    const props = {
        blogs,
        blogTypes,
        activeBlogType,
        onClickSetPage,
        pages,
        searchText,
        activeBranch,
        onChangeSearchTextInput,
        onChangeBlogBranch,
        optionsBlogBranch,
        onChangePage,
        onClickBlogTypeButtons,
        currentPage,
        randomNumberForGridArea
    }

    return <Blogs {...props}/>
};

export default BlogsContainer;