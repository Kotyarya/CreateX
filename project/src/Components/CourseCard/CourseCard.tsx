import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";
import style from "./CourseCard.module.scss"
import {ICourse} from "../../Redux/API/coursesAPI";
import {imgUrl} from "../../utils/const/const";
import {useAction} from "../../hook/useAction";

interface CourseCardProps {
    course: ICourse
}

const CourseCard: FC<CourseCardProps> = ({course}) => {

    const navigate = useNavigate()
    const {getActiveCourse} = useAction()

    const NavigateToCourse = (id: number) => {
        navigate(`/courses/${id}`)
        getActiveCourse(id)
    }

    const classNameBranch = course.branch.name !== "HR & Recruting" ? style[course.branch.name] : style.hr

    return (
        <div className={style.course}
             onClick={() => NavigateToCourse(course.id)}>
            <div className={style.img}>
                <img src={imgUrl + course.curator.img} alt=""/>
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