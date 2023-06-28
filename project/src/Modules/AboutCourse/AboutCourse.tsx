import React, {FC} from 'react';
import style from "./AboutCourse.module.scss"
import {nanoid} from "nanoid";
import Button, {ButtonSize, ButtonVariant} from "../../Components/Button/Button";
import {ILessons} from "../../Redux/Other/data";

interface AboutCourseProps {
    description: string,
    willLearn: string[],
    date: string,
    price: number,
    lessons: ILessons[]
}

const AboutCourse: FC<AboutCourseProps> = ({description, willLearn, date, price, lessons}) => {


    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <div className={style.about}>
                    <h2>About the course</h2>
                    <p>{description}</p>
                </div>
                <div className={style.willLearn}>
                    <h3>You will learn :</h3>
                    <ul>
                        {
                            willLearn.map((item) => {
                                return <li key={nanoid(10)}>{item}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className={style.info}>
                <div className={style.block}>
                    <p className={style.title}>dates</p>
                    <p className={style.text}>{date}</p>
                    <p className={style.description}>Metus turpis sit lorem lacus, in elit tellus lacus.</p>
                </div>
                <div className={style.block}>
                    <p className={style.title}>duration</p>
                    <p className={style.text}>2 months - {lessons.length} lessons</p>
                    <p className={style.description}>Rhoncus pellentesque auctor auctor orci vulputate faucibus quis
                        ut.</p>
                </div>
                <div className={style.block}>
                    <p className={style.title}>price</p>
                    <p className={style.text}>${price} per month</p>
                    <p className={style.description}>Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris
                        quam ac elit tristique dis.</p>
                </div>
                <Button text={"Join the courses"} variant={ButtonVariant.solid} size={ButtonSize.regular}/>
            </div>
        </div>
    );
};

export default AboutCourse;