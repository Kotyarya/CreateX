import React, {FC, useEffect} from 'react';
import StartCourse from "./HomeCourses";
import {useAction} from "../../hook/useAction";
import {useTypedSelector} from "../../hook/useTypedSelector";

const HomeCoursesContainer: FC = () => {

    const courses = useTypedSelector(state => state.courses.courses)
    const {getStartCourses} = useAction()


    useEffect(() => {
        getStartCourses()
        // eslint-disable-next-line
    }, [])


    return (
        <StartCourse courses={courses}/>
    );
};

export default HomeCoursesContainer;