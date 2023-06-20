import React, {FC} from 'react';
import style from "./Benefits.module.scss"
import {IBenefit} from "../../Redux/Other/data";


interface BenefitsProps {
    activeBenefits: string,
    setActiveBenefits: (benefits: string) => void,
    benefits: IBenefit[],
}

const Benefits: FC<BenefitsProps> = ({activeBenefits, setActiveBenefits, benefits}) => {

    const benefitsButton = benefits.map((benefit) => {
        return (
            <button onClick={() => setActiveBenefits(benefit.name)}
                    className={activeBenefits === benefit.name ? style.active : undefined} key={benefit.id}>
                <benefit.svg/>
                {benefit.name}
            </button>
        )
    })

    const activeBenefit = benefits.map((benefit) => {
        if (activeBenefits === benefit.name) {
            return (
                <div key={benefit.id} className={style.content}>
                    <div className={style.text}>
                        <h3>{benefit.title}</h3>
                        <p>{benefit.text}</p>
                    </div>
                    <img src={benefit.img} alt="illustration"/>
                </div>
            )
        } else return null
    })


    return (
        <div className={style.wrapper}>
            <article>
                <p>Our benefits</p>
                <h2>That’s how we do it</h2>
            </article>
            <div className={style.controls}>
                {benefitsButton}
            </div>
            <div>
                {activeBenefit}
            </div>
        </div>
    );
};

export default Benefits;