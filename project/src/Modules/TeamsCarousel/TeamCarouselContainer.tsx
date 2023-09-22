import React, {FC, useEffect} from 'react';
import TeamCarousel from "./TeamCarousel";
import {useTypedSelector} from "../../hook/useTypedSelector";
import {useAction} from "../../hook/useAction";

const TeamCarouselContainer: FC = () => {

    const {curators, loading} = useTypedSelector(state => state.curators)
    const {getCurators} = useAction()

    useEffect(() => {
        getCurators()
        // eslint-disable-next-line
    }, [])


    return (
        <TeamCarousel curators={curators} loading={loading}/>
    );
};

export default TeamCarouselContainer;