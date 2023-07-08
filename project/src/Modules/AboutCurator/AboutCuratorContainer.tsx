import React from 'react';
import AboutCurator from "./AboutCurator";
import {useTypedSelector} from "../../hook/useTypedSelector";

const AboutCuratorContainer = () => {
    const course = useTypedSelector(state => state.courses.activeCourse)
    const curator = course ? course.curator : undefined

    return <AboutCurator curator={curator}/>
};

export default AboutCuratorContainer;