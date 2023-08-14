import React, {FC} from 'react';
import style from "./CourseCard.module.scss"
import {imgUrl} from "../../utils/const/imgUrl";
import {useNavigateTo} from "../../hook/useNavigateTo";
import {CourseCardTypes} from "./CourseCardTypes";


const CourseCard: FC<CourseCardTypes> = ({course}) => {
    const {navigateToCoursePage} = useNavigateTo()

    const onNavigateToCoursePage = () => {
        navigateToCoursePage(course.id)
    }

    const classNameBranch = course.branch.name !== "HR & Recruting" ? style[course.branch.name] : style.hr

    return (
        <div className={style.course}
             onClick={onNavigateToCoursePage}>
            <div className={style.img}>
                <img src={imgUrl + course.curator.img} alt="img"/>
            </div>
            <div className={style.info}>
                <div className={style.branch + " " + classNameBranch}>
                    <p>{course.branch.name}</p>
                </div>
                <p className={style.title}>{course.title}</p>
                <p className={style.price}><span>${course.price}</span> | by {course.curator.name}</p>
            </div>
        </div>
    );
};

export default CourseCard;