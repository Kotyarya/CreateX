import React from 'react';
import style from "./AboutCreateX.module.scss"
import Button, {ButtonSize, ButtonVariant} from "../../Components/Button/Button";
import img from "./img/illustration.png"
import {NavLink} from "react-router-dom";

const AboutCreateX = () => {
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
                    <NavLink to={"/events"}>
                        <Button text={"Explore events"} variant={ButtonVariant.outline} size={ButtonSize.large}/>
                    </NavLink>
                    <NavLink to={"/courses"}>
                        <Button text={"Browse courses"} variant={ButtonVariant.solid} size={ButtonSize.large}/>
                    </NavLink>
                </div>
            </div>
            <img src={img} alt="illustration"/>
        </div>
    );
};

export default AboutCreateX;