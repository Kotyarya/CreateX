import React, {FC} from 'react';
import Logo from "../../Components/Logo/Logo";
import {NavLink} from "react-router-dom";
import Button from "../../Components/Button/Button";
import style from "./NavBar.module.scss"
import {ReactComponent as PersonIcon} from "../../assets/icons/other/personSVG.svg";
import {NavBarTypes} from "./NavBarTypes";
import {ButtonSize, ButtonVariant} from "../../Components/Button/ButtonTypes";
import {navLinks} from "../../utils/const/navLinks";
import {nanoid} from "nanoid";


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
                        {
                            navLinks.map((navLink) => {
                                return (
                                    <li key={nanoid((10))}>
                                        <NavLink
                                            to={navLink.path}
                                            className={({isActive}) => navLinkIsActive(isActive)}
                                        >
                                            {navLink.label}
                                        </NavLink>
                                    </li>
                                )
                            })
                        }
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