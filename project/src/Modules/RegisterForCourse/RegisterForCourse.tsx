import React from 'react';
import style from "./RegisterForCourse.module.scss"
import RegisterForCourseForm from "./RegisterForCourseForm/RegisterForCourseForm";
import illustration from "./img/illustration.png"

const RegisterForCourse = () => {
    return (
        <div className={style.wrapper}>
            <img src={illustration} alt="illustration"/>
            <div className={style.content}>
                <article>
                    <p>Leave a request now and get 20% off!</p>
                    <h2>Register for the course</h2>
                </article>
                <RegisterForCourseForm onSubmit={() => []}/>
            </div>
        </div>
    );
};

export default RegisterForCourse;