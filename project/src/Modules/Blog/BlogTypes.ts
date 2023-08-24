import {IBlog} from "../../Redux/Other/Types/blogsTypes";
import {ReactElement} from "react";

export interface BlogTypes {
    blog: IBlog | null,
    svg: null | ReactElement,
    time: null | string
}