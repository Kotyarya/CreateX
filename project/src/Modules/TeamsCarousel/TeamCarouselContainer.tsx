import React, {FC, useEffect, useState} from 'react';
import TeamCarousel from "./TeamCarousel";
import {useTypedSelector} from "../../hook/useTypedSelector";
import {useAction} from "../../hook/useAction";

const TeamCarouselContainer: FC = () => {
    const [translate, setTranslate] = useState(0)
    const curators = useTypedSelector(state => state.curators.curators)
    const {getCurators} = useAction()

    useEffect(() => {
        getCurators()
        // eslint-disable-next-line
    }, [])

    const moveCarousel = (num: number) => {
        setTranslate(num)
    }


    return (
        <TeamCarousel translate={translate} moveCarousel={moveCarousel} curators={curators}/>
    );
};

export default TeamCarouselContainer;