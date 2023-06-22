import React, {FC} from 'react';
import logo from "./img/logo.png"
import logoDark from "./img/logoDark.png"
import {NavLink} from "react-router-dom";
import "./Logo.module.scss"

interface LogoProps {
    darkMode?: boolean
}

const Logo: FC<LogoProps> = ({darkMode}) => {
    return (
        <NavLink to={"/"}>
            <img src={darkMode ? logoDark : logo} alt="logo"/>
        </NavLink>
    );
};

export default Logo;