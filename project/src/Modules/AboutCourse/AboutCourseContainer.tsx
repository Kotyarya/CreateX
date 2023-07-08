import React from 'react';
import AboutCourse from "./AboutCourse";
import {useTypedSelector} from "../../hook/useTypedSelector";

const AboutCourseContainer = () => {

    const course = useTypedSelector(state => state.courses.activeCourse)
    const description = course ? course.description : ""
    const date = course ? course.date : ""
    const price = course ? course.price : 0
    const willLearn = course ? course.willLearn : []
    const lessons = course ? course.lessons : []


    return (
        <AboutCourse description={description} willLearn={willLearn} date={date} lessons={lessons} price={price}/>
    );
};

export default AboutCourseContainer;