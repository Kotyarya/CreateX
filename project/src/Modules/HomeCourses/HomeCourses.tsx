import React, {FC} from 'react';
import style from "./HomeCourses.module.scss"
import Button, {ButtonSize, ButtonVariant} from "../../Components/Button/Button";
import CourseCard from "../../Components/CourseCard/CourseCard";
import {ICourse} from "../../Redux/API/coursesAPI";
import {NavLink} from "react-router-dom";


interface CoursesInHomePageProps {
    courses: ICourse[] | undefined,
}

const HomeCourses: FC<CoursesInHomePageProps> = ({courses}) => {

    return (
        <div className={style.wrapper}>
            <article>
                <div className={style.text}>
                    <p>Ready to learn?</p>
                    <h2>Featured Courses</h2>
                </div>
                <NavLink to={"/courses"}>
                    <Button
                        text={"View all courses"}
                        variant={ButtonVariant.outline}
                        size={ButtonSize.large}
                    />
                </NavLink>
            </article>
            <div className={style.content}>
                {
                    courses ? courses.map((course) => {
                            return <CourseCard key={course.id} course={course}/>
                        })
                        : null
                }
            </div>
        </div>
    );
};

export default HomeCourses;