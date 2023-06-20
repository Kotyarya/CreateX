import React, {FC} from 'react';
import style from "./Cerificate.module.scss"
import certificateImg from "./img/certificate.png"
import logo1 from "./img/logo.png"
import logo2 from "./img/logo-1.png"
import logo3 from "./img/logo-2.png"

const Certificate: FC = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <article>
                    <p>Createx Certificate</p>
                    <h2>Your expertise will be confirmed</h2>
                </article>
                <p className={style.text}>We are accredited by international professional organizations and
                    institutes:</p>
                <div className={style.logos}>
                    <img src={logo1} alt="logo"/>
                    <img src={logo2} alt="logo"/>
                    <img src={logo3} alt="logo"/>
                </div>
            </div>
            <img src={certificateImg} alt="certificate"/>
        </div>
    );
};

export default Certificate;