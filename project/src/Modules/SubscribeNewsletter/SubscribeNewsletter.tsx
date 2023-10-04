import React, {FC} from 'react';
import style from "./SubscribeNewsletter.module.scss"
import illustration from "./img/illustration.png"
import illustration2 from "./img/illustration2.png"
import SubscribeForm from "../SubscribeForm/SubscribeForm";
import CheckBox from "../../Components/CheckBox/CheckBox";
import {SubscribeNewsletterTypes} from "./SubscribeNewsletterTypes";

const SubscribeNewsletter: FC<SubscribeNewsletterTypes> = ({inEventPage}) => {
    return (
        <div className={inEventPage ? style.wrapper : style.forBlogPageWrapper}>
            <div className={style.content}>
                <img src={inEventPage ? illustration : illustration2} alt="illustration"/>
                <div className={style.form}>
                    <article>
                        {
                            inEventPage ?
                                <h2>Don’t want to miss the best events?
                                    Subscribe to our newsletter!</h2>
                                : <h2>Want to get the best articles weekly?
                                    Subscribe to our newsletter!</h2>
                        }
                    </article>
                    <SubscribeForm/>
                    <CheckBox text={"I agree to receive communications from Createx Online School"}/>
                </div>
            </div>
        </div>
    );
};

export default SubscribeNewsletter;