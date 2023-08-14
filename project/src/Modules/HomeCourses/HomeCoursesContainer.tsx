import React, {FC, useEffect} from 'react';
import HomeCourses from "./HomeCourses";
import {useAction} from "../../hook/useAction";
import {useTypedSelector} from "../../hook/useTypedSelector";
import {useNavigateTo} from "../../hook/useNavigateTo";

const HomeCoursesContainer: FC = () => {

    const courses = useTypedSelector(state => state.courses.courses)
    const {getStartCourses} = useAction()
    const {navigateToCoursesPage} = useNavigateTo()


    useEffect(() => {
        getStartCourses()
        // eslint-disable-next-line
    }, [])


    return (
        <HomeCourses courses={courses} navigateToCoursesPage={navigateToCoursesPage}/>
    );
};

export default HomeCoursesContainer;