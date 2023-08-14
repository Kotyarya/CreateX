import React, {FC} from 'react';
import WhoWeAre from "./WhoWeAre";
import {useNavigateTo} from "../../hook/useNavigateTo";

const WhoWeAreContainer: FC = () => {
    const {navigateToAboutUsPage} = useNavigateTo()
    return <WhoWeAre navigateToAboutUsPage={navigateToAboutUsPage}/>
};

export default WhoWeAreContainer;