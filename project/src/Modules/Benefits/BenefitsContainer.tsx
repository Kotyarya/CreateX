import React, {useState} from 'react';
import Benefits from "./Benefits";
import {benefitsData} from "../../Redux/Other/data";

const BenefitsContainer = () => {
    const [activeBenefits, setActiveBenefits] = useState<string>("Experienced Tutors")

    const setBenefits = (benefits: string) => {
        setActiveBenefits(benefits)
    }


    return (
        <Benefits activeBenefits={activeBenefits} setActiveBenefits={setBenefits} benefits={benefitsData}/>
    );
};

export default BenefitsContainer;