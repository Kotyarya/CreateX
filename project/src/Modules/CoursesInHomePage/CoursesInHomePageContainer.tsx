import React, {FC, useEffect} from 'react';
import CoursesInHomePage from "./CoursesInHomePage";
import {useAction} from "../../hook/useAction";
import {useTypedSelector} from "../../hook/useTypedSelector";
import {useNavigate} from "react-router-dom";

const CoursesInHomePageContainer: FC = () => {

    const courses = useTypedSelector(state => state.courses.courses)
    const navigate = useNavigate()
    const {getStartCourses} = useAction()


    useEffect(() => {
        getStartCourses()
    })

    const navigateToCoursesPage = () => {
        navigate("/courses")
    }


    return (
        <CoursesInHomePage courses={courses} onClickButton={navigateToCoursesPage}/>
    );
};

export default CoursesInHomePageContainer;