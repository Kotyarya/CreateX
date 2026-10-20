import React, {FC} from 'react';
import NavBar from "./NavBar";
import {ModalType} from "../../Redux/Other/Types/modalTypes";
import {useAction} from "../../hook/useAction";
import {useNavigateTo} from "../../hook/useNavigateTo";

const NavBarContainer: FC = () => {
    const {navigateToContactsPage} = useNavigateTo()
    const {showModalWindow} = useAction()


    const onShowModalWindow = () => {
        showModalWindow(ModalType.logIn)
    }


    return (
        <NavBar
            navigateToContactsPage={navigateToContactsPage}
            onShowModalWindow={onShowModalWindow}
        />
    );
};

export default NavBarContainer;