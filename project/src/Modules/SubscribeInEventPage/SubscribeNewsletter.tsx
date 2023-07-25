import React from 'react';
import style from "./SubscribeInEventPage.module.scss"
import illustration from "./img/illustration.png"
import SubscribeNewsletterForm from "./Form/SubscribeNewsletterForm";

const SubscribeNewsletter = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <img src={illustration} alt="illustration"/>
                <div className={style.form}>
                    <article>
                        <h2>Don’t want to miss the best events?
                            Subscribe to our newsletter!</h2>
                    </article>
                    <SubscribeNewsletterForm onSubmit={() => ({})}/>
                </div>
            </div>
        </div>
    );
};

export default SubscribeNewsletter;