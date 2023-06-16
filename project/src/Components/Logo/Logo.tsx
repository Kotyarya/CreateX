import React, {FC} from 'react';
import logo from "./img/logo.png"
import {NavLink} from "react-router-dom";
import "./Logo.module.scss"

const Logo: FC = () => {
    return (
        <NavLink to={"/"}>
            <img src={logo} alt="logo"/>
        </NavLink>
    );
};

export default Logo;