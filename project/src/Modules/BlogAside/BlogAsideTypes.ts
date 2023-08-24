import React from "react";
import {ICurator} from "../../Redux/Other/Types/curatorsTypes";
import {IBlog} from "../../Redux/Other/Types/blogsTypes";

export interface BlogAsideTypes {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    searchText: string,
    onFocus: () => void,
    onBlur: () => void,
    editMode: boolean,
    curator: ICurator | null,
    blogType: string | undefined,
    blogs: IBlog[] | null,
    tags: { text: string }[] | undefined
}
