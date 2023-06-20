import React, {FC} from 'react';
import style from "./CoursesInHomePage.module.scss"
import Button, {ButtonSize, ButtonVariant} from "../../Components/Button/Button";
import {ICourses} from "../../Redux/Other/data";


interface CoursesInHomePageProps {
    courses: ICourses[],
    onClickButton: () => void,
    onClickButtonCourse: (courseID: number) => void
}

const CoursesInHomePage: FC<CoursesInHomePageProps> = ({courses, onClickButton, onClickButtonCourse}) => {

    return (
        <div className={style.wrapper}>
            <article>
                <div className={style.text}>
                    <p>Ready to learn?</p>
                    <h2>Featured Courses</h2>
                </div>
                <Button
                    text={"View all courses"}
                    variant={ButtonVariant.outline}
                    size={ButtonSize.large}
                    onClick={onClickButton}
                />
            </article>
            <div className={style.content}>
                {courses.map((course) => {
                    return <div key={course.id} className={style.course + " " + style[course.branch]}
                                onClick={() => onClickButtonCourse(course.id)}>
                        <div className={style.img}><img src={course.photo} alt=""/></div>
                        <div className={style.info}>
                            <div className={style.branch + " " + style[course.branch]}>
                                <p>{course.branch === "hr" ? "HR & Recruting" : course.branch}</p>
                            </div>
                            <p className={style.title}>{course.title}</p>
                            <p className={style.price}><span>${course.price}</span> | by {course.author}</p>
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
};

export default CoursesInHomePage;