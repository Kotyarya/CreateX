import React from 'react';
import style from "./RegisterForEvent.module.scss"
import illustration from "./img/illustration.png"
import {useTypedSelector} from "../../hook/useTypedSelector";
import JoinForm from "../JoinForm/JoinForm";
import {JoinFormTypes} from "../JoinForm/JoinFormTypes";

const RegisterForEvent = () => {
    const eventType = useTypedSelector(state => state.events.activeEvent?.eventType.name)

    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <article>
                    <p>Don’t miss the event</p>
                    <h2>Leave a request</h2>
                </article>
                <JoinForm type={JoinFormTypes.event}/>
                <p className={style.text}>* You will receive a link to the {eventType?.toLowerCase()} in an email after
                    registration.</p>
            </div>
            <img src={illustration} alt="illustration"/>
        </div>
    );
};

export default RegisterForEvent;