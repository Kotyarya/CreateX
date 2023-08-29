import {IBlog, IBlogType} from "../../Redux/Other/Types/blogsTypes";
import React from "react";

export interface BlogsTypes {
    blogTypes: IBlogType[] | null,
    activeBlogType: number,
    onClickBlogTypeButtons: (blogTypeId: number) => void,
    optionsBlogBranch: {
        value: number,
        label: string
    }[] | undefined,
    activeBranch: {
        value: number,
        label: string
    },
    onChangeBlogBranch: (newValue: any) => void,
    onChangeSearchTextInput: (e: React.ChangeEvent<HTMLInputElement>) => void,
    searchText: string,
    blogs: IBlog[] | null,
    randomNumberForGridArea: number,
    currentPage: number,
    onChangePage: (num: number) => void,
    pages: number[],
    onClickSetPage: (page: number) => void
}