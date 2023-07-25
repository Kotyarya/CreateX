import {useParams} from "react-router-dom";

export const useBlogId = () => {
    const params = useParams()
    return Number(params["blogId"])
}