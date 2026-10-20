import React, {useEffect} from 'react';
import {useTypedSelector} from "../../hook/useTypedSelector";
import {useAction} from "../../hook/useAction";
import AboutCurator from "../AboutCurator/AboutCurator";
import {AboutCuratorType} from "../AboutCurator/AboutCuratorTypes";

const AboutSpeakerContainer = () => {
    const speakerId = useTypedSelector(state => state.events.activeEvent?.curatorId)
    const curator = useTypedSelector(state => state.curators.activeCurators) || undefined
    const {getActiveCurators} = useAction()

    useEffect(() => {
        if (speakerId) {
            getActiveCurators(speakerId)
        }
        //eslint-disable-next-line
    }, [speakerId])

    return <AboutCurator curator={curator} type={AboutCuratorType.speaker}/>

};

export default AboutSpeakerContainer;