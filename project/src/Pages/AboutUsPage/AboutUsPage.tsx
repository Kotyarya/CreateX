import React from 'react';
import style from "./AboutUsPage.module.scss"
import AboutCreateX from "../../Modules/AboutCreateX/AboutCreateX";
import AboutUsVideo from "../../Modules/AboutUsVideo/AboutUsVideo";
import Values from "../../Modules/Values/Values";
import DirectionsContainer from "../../Modules/Directions/DirectionsContainer";
import StudyingProcess from "../../Modules/StudyingProcess/StudyingProcess";

const AboutUsPage = () => {
    return (
        <div className={style.aboutUsPage}>
            <div className={style.aboutUs}>
                <AboutCreateX/>
            </div>
            <div className={style.video}>
                <AboutUsVideo/>
            </div>
            <div className={style.group}>
                <div className={style.values}>
                    <Values/>
                </div>
                <div className={style.directions}>
                    <DirectionsContainer/>
                </div>
                <div className={style.process}>
                    <StudyingProcess/>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;