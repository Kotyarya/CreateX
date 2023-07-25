import React, {FC} from 'react';
import style from "./ForWhom.module.scss"
import {nanoid} from "nanoid";

export enum ForWhomType {
    event = "event",
    course = "event"
}

interface ForWhomCourseProps {
    forWhom: { text: string }[] | undefined,
    type: ForWhomType
}

const ForWhom: FC<ForWhomCourseProps> = ({forWhom, type}) => {

    return (
        <div className={style.wrapper}>
            <article>
                <p>for whom?</p>
                <h2>Who will benefit from the {type}:</h2>
            </article>
            <ul>
                {forWhom?.map((item) => {
                    return <li key={nanoid(10)}>{item.text}</li>
                })}
            </ul>
        </div>
    );
};

export default ForWhom;