import {IBenefit} from "../../Redux/Other/Data/BenefitsData/BenefitsDataTypes";

export interface BenefitsTypes {
    activeBenefitId: number,
    setActiveBenefits: (benefits: number) => void,
    benefits: IBenefit[],
}