import React from 'react';
import style from "./AboutCreateX.module.scss"
import img from "./img/illustration.png"
import Button from "../../Components/Button/Button";
import {ButtonSize, ButtonVariant} from "../../Components/Button/ButtonTypes";
import {useNavigateTo} from "../../hook/useNavigateTo";

const AboutCreateX = () => {

    const {navigateToEventsPage, navigateToCoursesPage} = useNavigateTo()

    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <article>
                    <p>About us</p>
                    <h2>Createx Online School</h2>
                </article>
                <p className={style.text}>Createx Online School is a leader in online studying. We have lots of courses
                    and programs from the main market experts.</p>
                <p className={style.description}>We provide relevant approaches to online learning, internships and
                    employment in the largest companies in the country. Our educational programs help you get a new
                    specialty from scratch. During your studies, we will help you find a job. Check the courses and
                    online events that we organise.</p>
                <div className={style.buttons}>
                    <Button text={"Explore events"} variant={ButtonVariant.outline} size={ButtonSize.large}
                            onClick={navigateToEventsPage}/>
                    <Button text={"Browse courses"} variant={ButtonVariant.solid} size={ButtonSize.large}
                            onClick={navigateToCoursesPage}/>
                </div>
            </div>
            <img src={img} alt="illustration"/>
        </div>
    );
};

export default AboutCreateX;