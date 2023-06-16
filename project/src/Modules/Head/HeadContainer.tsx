import React, {FC} from 'react';
import Head from "./Head";
import {useNavigate} from "react-router-dom";

const HeadContainer: FC = () => {
    const navigate = useNavigate()

    const navigateToAboutPage = () => {
        navigate("/about-us")
    }

    const navigateToCoursesPage = () => {
        navigate("/courses")
    }

    return (
        <Head navigateToAboutPage={navigateToAboutPage} navigateToCoursesPage={navigateToCoursesPage}/>
    );
};

export default HeadContainer;