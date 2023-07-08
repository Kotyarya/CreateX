import React, {FC} from 'react';
import style from "./ForWhomCourse.module.scss"
import {nanoid} from "nanoid";

interface ForWhomCourseProps {
    forWhom: { text: string }[] | undefined
}

const ForWhomCourse: FC<ForWhomCourseProps> = ({forWhom}) => {

    return (
        <div className={style.wrapper}>
            <article>
                <p>for whom?</p>
                <h2>Who will benefit from the course:</h2>
            </article>
            <ul>
                {forWhom?.map((item) => {
                    return <li key={nanoid(10)}>{item.text}</li>
                })}
            </ul>
        </div>
    );
};

export default ForWhomCourse;