import React from 'react';
import {useTypedSelector} from "../../hook/useTypedSelector";
import ForWhom from "../../Components/ForWhom/ForWhomCourse";
import {ForWhomType} from "../../Components/ForWhom/ForWhomTypes";

const ForWhomCourseContainer = () => {
    const course = useTypedSelector(state => state.courses.activeCourse)
    const forWhom = course ? course.forWhom : undefined
    return <ForWhom forWhom={forWhom} type={ForWhomType.course}/>
};

export default ForWhomCourseContainer;