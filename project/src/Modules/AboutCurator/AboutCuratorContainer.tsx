import React, {useEffect} from 'react';
import {useTypedSelector} from "../../hook/useTypedSelector";
import {useAction} from "../../hook/useAction";
import AboutCurator from "./AboutCurator";
import {AboutCuratorType} from "./AboutCuratorTypes";

const AboutCuratorContainer = () => {
    const curatorId = useTypedSelector(state => state.courses.activeCourse?.curator.id)
    const curator = useTypedSelector(state => state.curators.activeCurators) || undefined
    const {getActiveCurators} = useAction()

    useEffect(() => {
        if (curatorId) {
            getActiveCurators(curatorId)
        }
        //eslint-disable-next-line
    }, [curatorId])

    return <AboutCurator curator={curator} type={AboutCuratorType.curator}/>
};

export default AboutCuratorContainer;