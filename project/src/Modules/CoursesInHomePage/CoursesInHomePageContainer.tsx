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
        // eslint-disable-next-line
    }, [])

    const navigateToCoursesPage = () => {
        navigate("/courses/")
    }

    const navigateToCourse = (courseID: number) => {
        navigate(`/courses/${courseID}`)
    }

    return (
        <CoursesInHomePage courses={courses} onClickButton={navigateToCoursesPage}
                           onClickButtonCourse={navigateToCourse}/>
    );
};

export default CoursesInHomePageContainer;