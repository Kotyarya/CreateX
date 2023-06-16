import React, {FC} from 'react';
import AboutInHomePage from "./AboutInHomePage";
import {useNavigate} from "react-router-dom";

const AboutInHomePageContainer: FC = () => {

    const navigate = useNavigate()

    const navigateToAboutUs = () => {
        navigate("/about-us")
    }

    return (
        <AboutInHomePage navigateTo={navigateToAboutUs}/>
    );
};

export default AboutInHomePageContainer;