import React, {FC} from 'react';
import style from "./CourseCarousel.module.scss"
import ControlButton, {ControlButtonRotation} from "../../Components/ControlButton/ControlButton";
import CourseCard from "../../Components/CourseCard/CourseCard";
import Button from "../../Components/Button/Button";
import {ButtonSize, ButtonVariant} from "../../Components/Button/ButtonTypes";
import {useCarousel} from "../../hook/useCarousel";
import {useNavigateTo} from "../../hook/useNavigateTo";
import {CourseCarouselTypes} from "./CourseCarouselTypes";


const CourseCarousel: FC<CourseCarouselTypes> = ({courses}) => {
    const {translate, onMoveBack, onMoveForward} = useCarousel(63)
    const {navigateToCoursesPage} = useNavigateTo()


    return (
        <div className={style.wrapper}>
            <div className={style.head}>
                <article>
                    <p>Check other courses</p>
                    <h2>You may also like</h2>
                </article>
                <div className={style.controls}>
                    <ControlButton rotation={ControlButtonRotation.left} disabled={translate === 0}
                                   onClick={onMoveBack}/>
                    <ControlButton rotation={ControlButtonRotation.right}
                                   disabled={translate === -252}
                                   onClick={onMoveForward}/>
                </div>
            </div>
            <div className={style.carousel}>
                <div className={style.content} style={{transform: `translateX(${translate}rem)`}}>
                    {
                        courses?.map((course) => {
                            return <CourseCard key={course.id} course={course}/>
                        })
                    }
                </div>
            </div>
            <div className={style.more}>
                <p>Do you want more courses?</p>
                <Button text={"View all courses"} variant={ButtonVariant.solid} size={ButtonSize.large}
                        onClick={navigateToCoursesPage}/>
            </div>
        </div>
    );
};

export default CourseCarousel;