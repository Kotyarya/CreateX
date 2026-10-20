import React, {FC} from 'react';
import Head from "./Head";
import {useAction} from "../../hook/useAction";
import {useNavigateTo} from "../../hook/useNavigateTo";
import {ModalType} from "../../Redux/Other/Types/modalTypes";

const HeadContainer: FC = () => {

    const {showModalWindow} = useAction()

    const {navigateToAboutUsPage, navigateToCoursesPage} = useNavigateTo()

    const onShowModalWindow = () => {
        showModalWindow(ModalType.video)
    }

    return (
        <Head navigateToAboutUsPage={navigateToAboutUsPage} navigateToCoursesPage={navigateToCoursesPage}
              onShowModalWindow={onShowModalWindow}/>
    );
};

export default HeadContainer;