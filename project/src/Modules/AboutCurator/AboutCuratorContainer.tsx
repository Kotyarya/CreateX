import React from 'react';
import AboutCurator from "./AboutCurator";
import {useTypedSelector} from "../../hook/useTypedSelector";

const AboutCuratorContainer = () => {
    const {curator} = useTypedSelector(state => state.courses.activeCourse)
    return <AboutCurator curator={curator}/>
};

export default AboutCuratorContainer;