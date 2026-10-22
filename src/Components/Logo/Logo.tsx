import React, {FC} from 'react';
import logo from "./img/logo.png"
import logoDark from "./img/logoDark.png"
import {NavLink} from "react-router-dom";
import style from "./Logo.module.scss"
import {staticPath} from "../../utils/helpers/path";

interface LogoProps {
    darkMode?: boolean
}

const Logo: FC<LogoProps> = ({darkMode}) => {
    return (
        <NavLink to={staticPath.homePage}>
            <img
                className={style.logo}
                src={darkMode ? logoDark : logo}
                alt="CreateX"
            />
        </NavLink>
    );
};

export default Logo;
