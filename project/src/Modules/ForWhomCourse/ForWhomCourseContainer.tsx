import React from 'react';
import ForWhomCourse from "./ForWhomCourse";
import {useTypedSelector} from "../../hook/useTypedSelector";

const ForWhomCourseContainer = () => {
    const course = useTypedSelector(state => state.courses.activeCourse)
    const forWhom = course ? course.forWhom : undefined
    return <ForWhomCourse forWhom={forWhom}/>
};

export default ForWhomCourseContainer;