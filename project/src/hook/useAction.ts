import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {rootActions} from "../Redux/Other/Actions";

export const useAction = () => {
    const dispatch = useDispatch()
    return bindActionCreators(rootActions, dispatch)
}