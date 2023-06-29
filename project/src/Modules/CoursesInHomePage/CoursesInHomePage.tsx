import React, {FC} from 'react';
import style from "./CoursesInHomePage.module.scss"
import Button, {ButtonSize, ButtonVariant} from "../../Components/Button/Button";
import {ICourses} from "../../Redux/Other/data";
import CourseCard from "../../Components/CourseCard/CourseCard";


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
                    return <CourseCard key={course.id} course={course}/>
                })}
            </div>
        </div>
    );
};

export default CoursesInHomePage;