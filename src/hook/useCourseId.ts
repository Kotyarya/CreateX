import {useParams} from "react-router-dom";

export const useCourseId = () => {
    const params = useParams()
    return Number(params["courseID"])
}