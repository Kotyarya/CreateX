import React, {FC} from 'react';
import {nanoid} from "nanoid";
import style from "./Lessons.module.scss"
import illustration from "./img/illustration.png"
import {LessonsTypes} from "./LessonsTypes";


const Lessons: FC<LessonsTypes> = ({lessons}) => {

    const lessonsBlocks = lessons?.map((lesson) => {
        return (
            <li key={nanoid(10)}>
                <details>
                    <summary><span>{lesson.title.slice(0, 10)}</span>{lesson.title.slice(10)}</summary>
                    <p>{lesson.description}</p>
                </details>
            </li>
        )
    })

    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <article>
                    <p>Course program</p>
                    <h2>What will you learn</h2>
                </article>
                <ul>
                    {lessonsBlocks}
                </ul>
            </div>
            <img src={illustration} alt="illustration"/>
        </div>
    );
};

export default Lessons;