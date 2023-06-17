import React, {FC} from 'react';
import HeadContainer from "../../Modules/Head/HeadContainer";
import AboutInHomePageContainer from "../../Modules/AboutInHomePage/AboutInHomePageContainer";
import style from "./HomePage.module.scss"
import CoursesInHomePageContainer from "../../Modules/CoursesInHomePage/CoursesInHomePageContainer";
import BenefitsContainer from "../../Modules/Benefits/BenefitsContainer";

const HomePage: FC = () => {


    return (
        <div className={style.homePage}>
            <div className={style.head}>
                <HeadContainer/>
            </div>
            <div className={style.about}>
                <AboutInHomePageContainer/>
            </div>
            <div className={style.courses}>
                <CoursesInHomePageContainer/>
            </div>
            <div className={style.benefits}>
                <BenefitsContainer/>
            </div>
        </div>
    );
};

export default HomePage;