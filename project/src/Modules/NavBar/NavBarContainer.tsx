import React, {FC, useState} from 'react';
import {useNavigate} from "react-router-dom";
import NavBar from "./NavBar";

const NavBarContainer: FC = () => {
    const navigate = useNavigate()
    const [loginModalIsActive, setLoginModalIsActive] = useState<boolean>(false)

    const navigateToContactsPage = () => {
        navigate("/contacts")
    }

    const showLoginModal = () => {
        setLoginModalIsActive(true)
    }

    const removeLoginModal = () => {
        setLoginModalIsActive(false)
    }

    return (
        <NavBar loginModalIsActive={loginModalIsActive}
                showLoginModal={showLoginModal}
                removeLoginModal={removeLoginModal}
                navigateToContactsPage={navigateToContactsPage}
        />
    );
};

export default NavBarContainer;