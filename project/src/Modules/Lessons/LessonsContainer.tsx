import React from 'react';
import Lessons from "./Lessons";
import {useTypedSelector} from "../../hook/useTypedSelector";

const LessonsContainer = () => {
    const course = useTypedSelector(state => state.courses.activeCourse)
    const lessons = course?.lessons

    return <Lessons lessons={lessons}/>
};

export default LessonsContainer;