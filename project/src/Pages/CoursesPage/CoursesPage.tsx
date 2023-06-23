import React from 'react';
import style from "./CoursesPage.module.scss"
import CoursesContainer from "../../Modules/Courses/CoursesContainer";

const CoursesPage = () => {
    return (
        <div className={style.coursesPage}>
            <div className={style.courses}>
                <CoursesContainer/>
            </div>
        </div>
    );
};

export default CoursesPage;