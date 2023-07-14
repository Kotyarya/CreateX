import React, {FC} from 'react';
import style from "./ThemesEvent.module.scss"
import {nanoid} from "nanoid";
import Button, {ButtonSize, ButtonVariant} from "../../Components/Button/Button";
import {IEvent} from "../../Redux/API/eventAPI";


interface ThemesEventProps {
    event: IEvent | null
}

const ThemesEvent: FC<ThemesEventProps> = ({event}) => {


    const themesList = event?.theme.map((theme, index) => {
        return (
            <li key={nanoid(10)}>
                <details open={index === 0}>
                    <summary><span>Theme {index + 1}.</span> {theme.title}</summary>
                    <p>{theme.description}</p>
                </details>
            </li>
        )
    })

    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <article>
                    <h2>We will talk about:</h2>
                </article>
                <div className={style.themes}>
                    <ul>
                        {themesList}
                    </ul>
                </div>
            </div>
            <div className={style.card}>
                <div className={style.block}>
                    <p className={style.title}>Time</p>
                    <p className={style.info}>{event?.month} {event?.day}, {event?.time}</p>
                    <p className={style.description}>Metus turpis sit lorem lacus, in elit tellus lacus.</p>
                </div>
                <div className={style.block}>
                    <p className={style.title}>price</p>
                    <p className={style.info}>Free</p>
                    <p className={style.description}>Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris
                        quam ac elit tristique dis.</p>
                </div>
                <a href="https://www.facebook.com/react/" rel={"noreferrer"} target={"_blank"}>Event on Facebook</a>
                <Button text={"Join the event"} variant={ButtonVariant.solid} size={ButtonSize.regular}/>
            </div>
        </div>
    );
};

export default ThemesEvent;