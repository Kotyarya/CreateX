import React from 'react';
import style from "./Subscribe.module.scss"
import SubscribeForm from "./SubscribeForm/SubscribeForm";


const Subscribe = () => {
    return (
        <div className={style.wrapper}>
            <article>
                <p>Don’t miss anything</p>
                <h2>Subscribe to the Createx School announcements</h2>
            </article>
            <SubscribeForm
                onSubmit={(values: any) => {
                    console.log(`Thank for subscribe ${values.email}`)
                }}
            />
        </div>
    );
};

export default Subscribe;

