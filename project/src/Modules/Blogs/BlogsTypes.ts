import {IBlog, IBlogType} from "../../Redux/Other/Types/blogsTypes";
import React from "react";
import {OptionsType} from "../../Components/Select/SelectTypes";

export interface BlogsTypes {
    blogTypes: IBlogType[] | null,
    activeBlogType: number,
    onClickBlogTypeButtons: (blogTypeId: number) => void,
    optionsBlogBranch: OptionsType<number>[] | undefined,
    activeBranch: OptionsType<number>,
    onChangeBlogBranch: (newValue: OptionsType<number>) => void,
    onChangeSearchTextInput: (e: React.ChangeEvent<HTMLInputElement>) => void,
    searchText: string,
    blogs: IBlog[] | null,
    randomNumberForGridArea: number,
    currentPage: number,
    onChangePage: (num: number) => void,
    pages: number[],
    onClickSetPage: (page: number) => void
}