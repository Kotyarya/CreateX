import React, {FC} from 'react';
import style from "./CoursesPage.module.scss"
import Certificate from "../../Components/Certificate/Certificate";
import SubscribeContainer from "../../Modules/Subscribe/SubscribeContainer";
import CoursesContainer from "../../Modules/Courses/CoursesContainer";
import Testimonials from "../../Modules/Testimonials/Testimonials";

const CoursesPage: FC = () => {
    document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })


    return (
        <div className={style.coursesPage}>
            <div className={style.courses}>
                <CoursesContainer/>
            </div>
            <div className={style.testimonials}>
                <Testimonials/>
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