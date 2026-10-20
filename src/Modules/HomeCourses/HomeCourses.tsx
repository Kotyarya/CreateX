import React, {FC} from 'react';
import style from "./HomeCourses.module.scss"
import CourseCard from "../../Components/CourseCard/CourseCard";
import Button from "../../Components/Button/Button";
import {ButtonSize, ButtonVariant} from "../../Components/Button/ButtonTypes";
import {HomeCoursesTypes} from "./HomeCoursesTypes";
import {useSkeleton} from "../../hook/useSkeleton";


const HomeCourses: FC<HomeCoursesTypes> = ({courses, navigateToCoursesPage, loading}) => {

    const courseBlocks = courses?.map((course) => {
        return <CourseCard key={course.id} course={course}/>
    })


    const skeletonBlocks = useSkeleton(9)

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
                    onClick={navigateToCoursesPage}
                />
            </article>
            <div className={style.content}>
                {
                    loading ?
                        skeletonBlocks :
                        courseBlocks
                }
            </div>
        </div>
    );
};

export default HomeCourses;