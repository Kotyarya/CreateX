import React from 'react';
import style from "./CheckBox.module.scss"
import {ReactComponent as CheckSVG} from "../../assets/img/icons/Check.svg";

const CheckBox = ({text}: { text: string }) => {
    return (
        <label className={style.wrapper}>
            <input type="checkbox"/>
            <span><CheckSVG/></span>
            <p>{text}</p>
        </label>
    );
};

export default CheckBox;