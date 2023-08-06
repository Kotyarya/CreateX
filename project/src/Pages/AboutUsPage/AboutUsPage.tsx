import React from 'react';
import style from "./AboutUsPage.module.scss"
import AboutCreateX from "../../Modules/AboutCreateX/AboutCreateX";
import AboutUsVideo from "../../Modules/AboutUsVideo/AboutUsVideo";

const AboutUsPage = () => {
    return (
        <div className={style.aboutUsPage}>
            <div className={style.aboutUs}>
                <AboutCreateX/>
            </div>
            <div className={style.video}>
                <AboutUsVideo/>
            </div>
        </div>
    );
};

export default AboutUsPage;