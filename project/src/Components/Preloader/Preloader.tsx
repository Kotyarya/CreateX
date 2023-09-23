import React from 'react';
import loader from "../../assets/preloader.gif";
import style from "./Preloader.module.scss"

const Preloader = () => {
    return (
        <div className={style.load}>
            <img src={loader} alt="preloader"/>
        </div>
    );
};

export default Preloader;