// import React, {useEffect} from 'react';
// import style from "./CoursePage.module.scss"
// import CourseTitle from "../../../Modules/CourseTitle/CourseTitle";
// import AboutCourseContainer from "../../../Modules/AboutCourse/AboutCourseContainer";
// import {useCourseId} from "../../../hook/useCourseId";
// import {useAction} from "../../../hook/useAction";
// import AboutCuratorContainer from "../../../Modules/AboutCurator/AboutCuratorContainer";
// import MainSteps from "../../../Modules/MainSteps/MainSteps";
// import DiscountContainer from "../../../Modules/Discount/DiscountContainer";
// import ForWhomCourseContainer from "../../../Modules/ForWhomCourse/ForWhomCourseContainer";
// import LessonsContainer from "../../../Modules/Lessons/LessonsContainer";
// import TestimonialsContainer from "../../../Modules/Testimonials/TestimonialsContainer";
// import RegisterForCourseContainer from "../../../Modules/RegisterForCourse/RegisterForCourseContainer";
// import CourseCarouselContainer from "../../../Modules/CourseCarousel/CourseCarouselContainer";
//
// const CoursePage = () => {
//
//     document.documentElement.scrollTo({
//         top: 0,
//         behavior: "smooth"
//     })
//
//
//     const idCourse = useCourseId()
//
//     const {getCourseById} = useAction()
//
//     useEffect(() => {
//         getCourseById(idCourse)
//         // eslint-disable-next-line
//     }, [])
//
//     return (
//         <div className={style.coursePage}>
//             <div className={style.pageTitle}>
//                 <CourseTitle/>
//             </div>
//             <div className={style.aboutCourse}>
//                 <AboutCourseContainer/>
//             </div>
//             <div className={style.group}>
//                 <div className={style.aboutCurator}>
//                     <AboutCuratorContainer/>
//                 </div>
//                 <div className={style.mainSteps}>
//                     <MainSteps/>
//                 </div>
//                 <div className={style.discount}>
//                     <DiscountContainer/>
//                 </div>
//                 <div className={style.forWhom}>
//                     <ForWhomCourseContainer/>
//                 </div>
//             </div>
//             <div className={style.lessons}>
//                 <LessonsContainer/>
//             </div>
//             <div className={style.groupGray}>
//                 <div className={style.testimonials}>
//                     <TestimonialsContainer/>
//                 </div>
//                 <div className={style.register}>
//                     <RegisterForCourseContainer/>
//                 </div>
//             </div>
//             <div className={style.courseCarousel}>
//                 <CourseCarouselContainer/>
//             </div>
//         </div>
//     );
// };
//
// export default CoursePage;
export {}