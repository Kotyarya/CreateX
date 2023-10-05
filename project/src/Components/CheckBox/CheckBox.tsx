import React from 'react';
import style from "./CheckBox.module.scss"
import {ReactComponent as CheckSVG} from "../../assets/icons/other/Check.svg";

const CheckBox = ({text, width}: { text: string, width?: number }) => {
    return (
        <label className={style.wrapper} style={{width: `${width}rem`}}>
            <input type="checkbox"/>
            <span><CheckSVG/></span>
            <p>{text}</p>
        </label>
    );
};

export default CheckBox;