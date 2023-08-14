import React, {FC} from 'react';
import style from "./Benefits.module.scss"
import {BenefitsTypes} from "./BenefitsTypes";


const Benefits: FC<BenefitsTypes> = ({activeBenefitId, setActiveBenefits, benefits}) => {

    const benefitsButton = benefits.map((benefit) => {
        return (
            <button onClick={() => setActiveBenefits(benefit.id)}
                    className={activeBenefitId === benefit.id ? style.active : ""} key={benefit.id}>
                <benefit.svg/>
                {benefit.name}
            </button>
        )
    })

    const activeBenefit = benefits.map((benefit) => {
        if (activeBenefitId === benefit.id) {
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
            {activeBenefit}
        </div>
    );
};

export default Benefits;