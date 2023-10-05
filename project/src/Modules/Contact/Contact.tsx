import React from 'react';
import style from "./Contact.module.scss"
import illustration from "./img/illustration.png"
import ContactForm from "../ContactForm/ContactForm";

const Contact = () => {
    return (
        <div className={style.wrapper}>
            <img src={illustration} alt="illustration"/>
            <div className={style.content}>
                <article>
                    <p>any questions?</p>
                    <h2>Drop us a line</h2>
                </article>
                <ContactForm/>
            </div>
        </div>
    );
};

export default Contact;