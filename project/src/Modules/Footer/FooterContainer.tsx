import React, {FC} from 'react';
import Footer from "./Footer";

const FooterContainer: FC = () => {
    const goTop = () => {
        document.documentElement.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    const submit = (values: any) => {
    }

    return (
        <Footer goTop={goTop} submit={submit}/>
    );
};

export default FooterContainer;