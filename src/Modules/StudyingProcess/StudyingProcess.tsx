import React from 'react';
import style from "./StudyingProcess.module.scss"
import illustration from "./img/illustration.png"
import {stepsStudying} from "../../Redux/Other/Data/StepsStudyingData/StepsStudyingData";

const StudyingProcess = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <article>
                    <p>Studying process</p>
                    <h2>That’s how we do it</h2>
                </article>
                <div className={style.steps}>
                    {stepsStudying.map((step) => {
                        return (
                            <div className={style.block} key={step.step}>
                                <p className={style.number}>step {step.step}</p>
                                <p className={style.title}>{step.name}</p>
                                <p className={style.text}>{step.text}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <img src={illustration} alt="illustration"/>
        </div>
    );
};

export default StudyingProcess;