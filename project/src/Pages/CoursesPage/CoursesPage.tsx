import React, {FC} from 'react';
import style from "./CoursesPage.module.scss"
import CoursesContainer from "../../Modules/Courses/CoursesContainer";
import TestimonialsContainer from "../../Modules/Testimonials/TestimonialsContainer";
import Certificate from "../../Components/Certificate/Certificate";
import SubscribeContainer from "../../Modules/Subscribe/SubscribeContainer";

const CoursesPage: FC = () => {
    return (
        <div className={style.coursesPage}>
            <div className={style.courses}>
                <CoursesContainer/>
            </div>
            <div className={style.testimonials}>
                <TestimonialsContainer/>
            </div>
            <div className={style.certificate}>
                <Certificate/>
            </div>
            <div className={style.subscribe}>
                <SubscribeContainer/>
            </div>
        </div>
    );
};

export default CoursesPage;