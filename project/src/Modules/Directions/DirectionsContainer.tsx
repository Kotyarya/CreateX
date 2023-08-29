import React, {useEffect} from 'react';
import Directions from "./Directions";
import {useTypedSelector} from "../../hook/useTypedSelector";
import {useAction} from "../../hook/useAction";
import {useNavigateTo} from "../../hook/useNavigateTo";

const DirectionsContainer = () => {

    const branches = useTypedSelector(state => state.branches.branches)
    const {getBranches, setActiveBranch} = useAction()
    const {navigateToCoursesPage} = useNavigateTo()

    useEffect(() => {
        getBranches()
        // eslint-disable-next-line
    }, [])

    const navigateToCoursesPageHandler = (branchId: number) => {
        setActiveBranch(branchId)
        navigateToCoursesPage()
    }

    return <Directions branches={branches} navigateToCoursesPageHandler={navigateToCoursesPageHandler}/>
};

export default DirectionsContainer;