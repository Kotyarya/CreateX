import React, {FC} from 'react';
import HeadContainer from "../../Modules/Head/HeadContainer";
import style from "./HomePage.module.scss"
import BenefitsContainer from "../../Modules/Benefits/BenefitsContainer";
import HomeEventsContainer from "../../Modules/HomeEvents/HomeEventsContainer";
import Certificate from "../../Components/Certificate/Certificate";
import TestimonialsContainer from "../../Modules/Testimonials/TestimonialsContainer";
import SubscribeContainer from "../../Modules/Subscribe/SubscribeContainer";
import HomeCoursesContainer from "../../Modules/HomeCourses/HomeCoursesContainer";
import TeamCarouselContainer from "../../Modules/TeamsCarousel/TeamCarouselContainer";
import WhoWeAre from "../../Modules/WhoWeAre/AboutInHomePage";

const HomePage: FC = () => {
    document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })

    return (
        <div className={style.homePage}>
            <div className={style.head}>
                <HeadContainer/>
            </div>
            <div className={style.about}>
                <WhoWeAre/>
            </div>
            <div className={style.courses}>
                <HomeCoursesContainer/>
            </div>
            <div className={style.benefits}>
                <BenefitsContainer/>
            </div>
            <div className={style.events}>
                <HomeEventsContainer/>
            </div>
            <div className={style.certificate}>
                <Certificate/>
            </div>
            <div className={style.group}>
                <div className={style.teams}>
                    <TeamCarouselContainer/>
                </div>
                <div className={style.testimonials}>
                    <TestimonialsContainer/>
                </div>
            </div>
            <div className={style.subscribe}>
                <SubscribeContainer/>
            </div>
        </div>
    );
};

export default HomePage;