import React from 'react';
import style from "./ContactPage.module.scss"
import ContactInfo from "../../Modules/ContactInfo/ContactInfo";
import Contact from "../../Modules/Contact/Contact";

const ContactPage = () => {
    document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })

    return (
        <div className={style.contactPage}>
            <div className={style.info}>
                <ContactInfo/>
            </div>
            <div className={style.contact}>
                <Contact/>
            </div>
        </div>
    );
};

export default ContactPage;