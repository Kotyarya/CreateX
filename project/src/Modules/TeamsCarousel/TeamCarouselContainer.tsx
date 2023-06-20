import React, {FC, useState} from 'react';
import TeamCarousel from "./TeamCarousel";
import {curators} from "../../Redux/Other/data";

const TeamCarouselContainer: FC = () => {
    const [translate, setTranslate] = useState<number>(0)

    const moveCarousel = (num: number) => {
        setTranslate(num)
    }


    return (
        <TeamCarousel translate={translate} moveCarousel={moveCarousel} curators={curators}/>
    );
};

export default TeamCarouselContainer;