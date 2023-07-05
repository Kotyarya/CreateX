// import React, {FC} from 'react';
// import {useNavigate} from "react-router-dom";
// import {ICourses} from "../../Redux/Other/data";
// import style from "./CourseCard.module.scss"
// import {useAction} from "../../hook/useAction";
//
// interface CourseCardProps {
//     course: ICourses
// }
//
// const CourseCard: FC<CourseCardProps> = ({course}) => {
//
//     const navigate = useNavigate()
//     const {getCourseById} = useAction()
//
//     const onClickButtonCourse = (id: number) => {
//         navigate(`/courses/${id}`)
//         getCourseById(id)
//     }
//
//     return (
//         <div key={course.id} className={style.course + " " + style[course.branch]}
//              onClick={() => onClickButtonCourse(course.id)}>
//             <div className={style.img}><img src={course.photo} alt=""/></div>
//             <div className={style.info}>
//                 <div className={style.branch + " " + style[course.branch]}>
//                     <p>{course.branch === "hr" ? "HR & Recruting" : course.branch}</p>
//                 </div>
//                 <p className={style.title}>{course.title}</p>
//                 <p className={style.price}><span>${course.price}</span> | by {course.author}</p>
//             </div>
//         </div>
//     );
// };
//
// export default CourseCard;
export {}