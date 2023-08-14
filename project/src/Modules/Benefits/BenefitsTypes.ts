import {IBenefit} from "../../Redux/Other/data";

export interface BenefitsTypes {
    activeBenefitId: number,
    setActiveBenefits: (benefits: number) => void,
    benefits: IBenefit[],
}