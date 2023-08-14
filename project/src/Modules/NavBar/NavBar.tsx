import React, {FC} from 'react';
import Logo from "../../Components/Logo/Logo";
import {NavLink} from "react-router-dom";
import Button from "../../Components/Button/Button";
import style from "./NavBar.module.scss"
import {ReactComponent as PersonIcon} from "../../assets/icons/other/personSVG.svg";
import {staticPath} from "../../utils/helpers/path";
import {NavBarTypes} from "./NavBarTypes";
import {ButtonSize, ButtonVariant} from "../../Components/Button/ButtonTypes";


const NavBar: FC<NavBarTypes> = ({navigateToContactsPage, onShowModalWindow}) => {
    const navLinkIsActive = (isActive: boolean): string => {
        return isActive ? style.active : ""
    }


    return (
        <>
            <header className={style.navBar}>
                <nav>
                    <Logo/>
                    <ul>
                        <li>
                            <NavLink
                                className={({isActive}) => navLinkIsActive(isActive)}
                                to={staticPath.aboutUsPage}
                            >
                                About us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({isActive}) => navLinkIsActive(isActive)}
                                to={staticPath.coursePage}
                            >
                                Courses
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({isActive}) => navLinkIsActive(isActive)}
                                to={staticPath.eventsPage}
                            >
                                Events
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({isActive}) => navLinkIsActive(isActive)}
                                to={staticPath.blogPage}
                            >
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({isActive}) => navLinkIsActive(isActive)}
                                to={staticPath.contactsPage}
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
                    <button className={style.logIn} onClick={onShowModalWindow}>
                        <PersonIcon/>
                        Log in / Register
                    </button>
                </div>
            </header>
        </>
    );
};

export default NavBar;