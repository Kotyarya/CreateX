import React from 'react';
import style from "./MainSteps.module.scss"
import {stepsStudying} from "../../Redux/Other/Data/StepsStudyingData/StepsStudyingData";

const MainSteps = () => {
    return (
        <div className={style.wrapper}>
            <article>
                <p>main steps</p>
                <h2>Online learning process</h2>
            </article>
            <div className={style.content}>
                {stepsStudying.map((step) => {
                    return (
                        <div className={style.block} key={step.step}>
                            <div className={style.number}>
                                <p>0{step.step}</p>
                                <span className={style.bg1}></span>
                                <span className={style.bg2}></span>
                            </div>
                            <div className={style.text}>
                                <p className={style.title}>{step.name}</p>
                                <p className={style.description}>{step.text}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default MainSteps;