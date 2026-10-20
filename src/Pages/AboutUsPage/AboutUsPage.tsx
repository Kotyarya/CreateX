import React from 'react';
import style from "./AboutUsPage.module.scss"
import AboutCreateX from "../../Modules/AboutCreateX/AboutCreateX";
import AboutUsVideo from "../../Modules/AboutUsVideo/AboutUsVideo";
import Values from "../../Modules/Values/Values";
import DirectionsContainer from "../../Modules/Directions/DirectionsContainer";
import StudyingProcess from "../../Modules/StudyingProcess/StudyingProcess";
import LatestBlogsContainer from "../../Modules/LatestBlogs/LatestBlogsContainer";
import SubscribeContainer from "../../Modules/Subscribe/SubscribeContainer";
import Testimonials from "../../Modules/Testimonials/Testimonials";

const AboutUsPage = () => {

    document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })

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
            <div className={style.testimonials}>
                <Testimonials/>
            </div>
            <div className={style.latestBlog}>
                <LatestBlogsContainer/>
            </div>
            <div className={style.subscribe}>
                <SubscribeContainer/>
            </div>
        </div>
    );
};

export default AboutUsPage;