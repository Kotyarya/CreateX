import React, {FC, useEffect} from 'react';
import Footer from "./Footer";
import {useTypedSelector} from "../../hook/useTypedSelector";
import {useAction} from "../../hook/useAction";
import {useNavigateTo} from "../../hook/useNavigateTo";

const FooterContainer: FC = () => {

    const {branches} = useTypedSelector(state => state.branches)
    const {getBranches, getCourseByBranch} = useAction()
    const {navigateToCoursesPage} = useNavigateTo()


    const goTop = () => {
        document.documentElement.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    const submit = (values: any) => {
    }

    const onClickToCoursePage = (branchId: number) => {
        getCourseByBranch(branchId, 1, "")
        navigateToCoursesPage()
    }


    useEffect(() => {
        getBranches()
        // eslint-disable-next-line
    }, [])

    return (
        <Footer goTop={goTop} submit={submit} branches={branches} onClickToCoursePage={onClickToCoursePage}/>
    );
};

export default FooterContainer;