import React from 'react';
import style from "./Values.module.scss"
import {ReactComponent as StructureSVG} from "../../assets/icons/values/ic-structure.svg";
import {ReactComponent as ChatSVG} from "../../assets/icons/values/ic-chat.svg";
import {ReactComponent as TargetSVG} from "../../assets/icons/values/ic-target.svg";
import {ReactComponent as CalendarSVG} from "../../assets/icons/values/ic-calendar.svg";

const Values = () => {
    return (
        <div className={style.wrapper}>
            <article>
                <p>We always stand for</p>
                <h2>Our core values</h2>
            </article>
            <div className={style.content}>
                <div className={style.block}>
                    <StructureSVG/>
                    <p className={style.title}>Structured Approach</p>
                    <p className={style.description}>Aenean urna dictum adipiscing nec, cras quisque. Nunc in
                        mauris. </p>
                </div>
                <span></span>
                <div className={style.block}>
                    <ChatSVG/>
                    <p className={style.title}>Professional Feedbacks</p>
                    <p className={style.description}>Culpa nostrud commodo ea consequat reprehenderit aliquip. </p>
                </div>
                <span></span>
                <div className={style.block}>
                    <TargetSVG/>
                    <p className={style.title}>Efficiency</p>
                    <p className={style.description}>Viverra scelerisque consequat net. Adipisicing esse consequat. </p>
                </div>
                <span></span>
                <div className={style.block}>
                    <CalendarSVG/>
                    <p className={style.title}>Flexible Shedule</p>
                    <p className={style.description}>Aute eiusmod dolore dolore deserunt veniam ad deserunt. </p>
                </div>
            </div>
        </div>
    );
};

export default Values;