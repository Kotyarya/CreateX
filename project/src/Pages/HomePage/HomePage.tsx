import React, {FC} from 'react';
import HeadContainer from "../../Modules/Head/HeadContainer";
import AboutInHomePageContainer from "../../Modules/AboutInHomePage/AboutInHomePageContainer";
import style from "./HomePage.module.scss"
import BenefitsContainer from "../../Modules/Benefits/BenefitsContainer";
import EventsInHomePageContainer from "../../Modules/EventsInHomePage/EventsInHomePageContainer";
import Certificate from "../../Components/Certificate/Certificate";
import TestimonialsContainer from "../../Modules/Testimonials/TestimonialsContainer";
import SubscribeContainer from "../../Modules/Subscribe/SubscribeContainer";

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
                <AboutInHomePageContainer/>
            </div>
            <div className={style.courses}>
                {/*<CoursesInHomePageContainer/>*/}
            </div>
            <div className={style.benefits}>
                <BenefitsContainer/>
            </div>
            <div className={style.events}>
                <EventsInHomePageContainer/>
            </div>
            <div className={style.certificate}>
                <Certificate/>
            </div>
            <div className={style.group}>
                <div className={style.teams}>
                    {/*<TeamCarouselContainer/>*/}
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