import React from 'react';
import style from "./RegisterForCourse.module.scss"
import illustration from "./img/illustration.png"
import JoinForm from "../JoinForm/JoinForm";
import {JoinFormTypes} from "../JoinForm/JoinFormTypes";

const RegisterForCourse = () => {

    return (
        <div className={style.wrapper}>
            <img src={illustration} alt="illustration"/>
            <div className={style.content}>
                <article>
                    <p>Leave a request now and get 20% off!</p>
                    <h2>Register for the course</h2>
                </article>
                <JoinForm type={JoinFormTypes.course}/>
            </div>
        </div>
    );
};

export default RegisterForCourse;