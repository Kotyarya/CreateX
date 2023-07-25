import React from 'react';
import AboutCourse from "./AboutCourse";
import {useTypedSelector} from "../../hook/useTypedSelector";

const AboutCourseContainer = () => {

    const course = useTypedSelector(state => state.courses.activeCourse)
    const description = course ? course.description : ""
    const date = course ? course.date : ""
    const price = course ? course.price : 0
    const willLearn = course ? course.willLearn : []
    const lessonsLength = course ? course.lessons.length : 0


    return (
        <AboutCourse description={description}
                     willLearn={willLearn}
                     date={date}
                     lessonsLength={lessonsLength}
                     price={price}/>
    );
};

export default AboutCourseContainer;