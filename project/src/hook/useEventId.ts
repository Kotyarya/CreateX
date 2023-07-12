import {useParams} from "react-router-dom";

export const useEventId = () => {
    const params = useParams()
    return Number(params["eventID"])
}