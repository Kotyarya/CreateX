import React, {FC, useState} from 'react';
import Benefits from "./Benefits";
import {benefitsData} from "../../Redux/Other/data";

const BenefitsContainer: FC = () => {
    const [activeBenefitId, setActiveBenefitId] = useState<number>(1)

    const setBenefits = (benefitsId: number) => {
        setActiveBenefitId(benefitsId)
    }


    return (
        <Benefits activeBenefitId={activeBenefitId} setActiveBenefits={setBenefits} benefits={benefitsData}/>
    );
};

export default BenefitsContainer;