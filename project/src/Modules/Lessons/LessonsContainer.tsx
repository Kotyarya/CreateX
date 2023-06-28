import React from 'react';
import Lessons from "./Lessons";
import {useTypedSelector} from "../../hook/useTypedSelector";

const LessonsContainer = () => {
    const lessons = useTypedSelector(state => state.courses.activeCourse.lessons)

    return <Lessons lessons={lessons}/>
};

export default LessonsContainer;