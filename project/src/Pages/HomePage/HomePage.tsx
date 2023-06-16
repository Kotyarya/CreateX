import React, {FC} from 'react';
import HeadContainer from "../../Modules/Head/HeadContainer";
import AboutInHomePageContainer from "../../Modules/AboutInHomePage/AboutInHomePageContainer";
import style from "./HomePage.module.scss"

const HomePage: FC = () => {
    return (
        <div className={style.homePage}>
            <div className={style.head}>
                <HeadContainer/>
            </div>
            <div className={style.about}>
                <AboutInHomePageContainer/>
            </div>
        </div>
    );
};

export default HomePage;