import React from 'react';
import ForWhom, {ForWhomType} from "../../Components/ForWhom/ForWhomCourse";
import {useTypedSelector} from "../../hook/useTypedSelector";

const ForWhomCourseContainer = () => {
    const course = useTypedSelector(state => state.courses.activeCourse)
    const forWhom = course ? course.forWhom : undefined
    return <ForWhom forWhom={forWhom} type={ForWhomType.course}/>
};

export default ForWhomCourseContainer;