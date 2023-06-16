import React, {FC} from 'react';
import Logo from "../../Components/Logo/Logo";
import {NavLink} from "react-router-dom";
import Button, {ButtonSize, ButtonVariant} from "../../Components/Button/Button";
import style from "./NavBar.module.scss"
import {ReactComponent as PersonIcon} from "./icons/personSVG.svg";
import LoginModal from "../../Components/LoginModal/LoginModal";


interface NavBarProps {
    loginModalIsActive: boolean,
    showLoginModal: () => void,
    removeLoginModal: () => void,
    navigateToContactsPage: () => void
}

const NavBar: FC<NavBarProps> = ({loginModalIsActive, showLoginModal, removeLoginModal, navigateToContactsPage}) => {
    const navLinkIsActive = (isActive: boolean): string => {
        return isActive ? style.active : ""
    }


    return (
        <>
            {loginModalIsActive ? <LoginModal closeModal={removeLoginModal}/> : null}
            <header className={style.navBar}>
                <nav>
                    <Logo/>
                    <ul>
                        <li>
                            <NavLink
                                className={({isActive}) => navLinkIsActive(isActive)}
                                to={"/about-us"}
                            >
                                About us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({isActive}) => navLinkIsActive(isActive)}
                                to={"/courses"}
                            >
                                Courses
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({isActive}) => navLinkIsActive(isActive)}
                                to={"/events"}
                            >
                                Events
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({isActive}) => navLinkIsActive(isActive)}
                                to={"/blog"}
                            >
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({isActive}) => navLinkIsActive(isActive)}
                                to={"/contacts"}
                            >
                                Contacts
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div>
                    <Button text={"Get consultation"}
                            variant={ButtonVariant.solid}
                            size={ButtonSize.large}
                            onClick={navigateToContactsPage}/>
                    <button onClick={showLoginModal} className={style.logIn}>
                        <PersonIcon/>
                        Log in / Register
                    </button>
                </div>
            </header>
        </>
    );
};

export default NavBar;