import React, {FC, useEffect} from 'react';
import CourseCarousel from "./CourseCarousel";
import {useTypedSelector} from "../../hook/useTypedSelector";
import {useAction} from "../../hook/useAction";

const CourseCarouselContainer: FC = () => {
    const courses = useTypedSelector(state => state.courses.courses)
    const {getStartCourses} = useAction()

    useEffect(() => {
        getStartCourses()
        // eslint-disable-next-line
    }, [])

    return <CourseCarousel courses={courses}/>
};

export default CourseCarouselContainer;