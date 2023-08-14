import React, {FC} from 'react';
import style from "./Footer.module.scss"
import Logo from "../../Components/Logo/Logo";
import {ReactComponent as FacebookSVG} from "../../assets/icons/socialMedia/facebookSVG.svg";
import {ReactComponent as TwitterSVG} from "../../assets/icons/socialMedia/twitterSVG.svg";
import {ReactComponent as YouTubeSVG} from "../../assets/icons/socialMedia/youtubeSVG.svg";
import {ReactComponent as TelegramSVG} from "../../assets/icons/socialMedia/telegramSVG.svg";
import {ReactComponent as InstagramSVG} from "../../assets/icons/socialMedia/instagramSVG.svg";
import {ReactComponent as LinkedInSVG} from "../../assets/icons/socialMedia/linkedinSVG.svg";
import {ReactComponent as PhoneSVG} from "../../assets/icons/other/phoneSVG.svg";
import {ReactComponent as MailSVG} from "../../assets/icons/other/mailSVG.svg";
import {ReactComponent as HeartSVG} from "../../assets/icons/other/heart.svg";
import FooterForm from "./FooterForm/FooterForm";
import {NavLink} from "react-router-dom";

interface FooterProps {
    goTop: () => void,
    submit: (values: any) => void
}


const Footer: FC<FooterProps> = ({goTop, submit}) => {


    return (
        <footer>
            <div className={style.content}>
                <div className={style.info}>
                    <Logo darkMode={true}/>
                    <p>Createx Online School is a leader in online studying. We have lots of courses and programs from
                        the main market experts. We provide relevant approaches to online learning, internships and
                        employment in the largest companies in the country. </p>
                    <div className={style.social}>
                        <FacebookSVG/>
                        <TwitterSVG/>
                        <YouTubeSVG/>
                        <TelegramSVG/>
                        <InstagramSVG/>
                        <LinkedInSVG/>
                    </div>
                </div>
                <ul>
                    <p>Site map</p>
                    <li>
                        <NavLink to={"/about-us"}>About us</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/courses"}>Courses</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/events"}>Events</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/blog"}>Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/contacts"}>Contacts</NavLink>
                    </li>
                </ul>
                <ul>
                    <p>Courses</p>
                    <li>
                        <NavLink to={"/courses"}>Marketing</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/courses"}>Management</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/courses"}>HR & Recruting</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/courses"}>Design</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/courses"}>Development</NavLink>
                    </li>
                </ul>
                <ul>
                    <p>Contact us</p>
                    <li><NavLink to={"/contacts"}><PhoneSVG/> (405) 555-0128</NavLink></li>
                    <li><NavLink to={"/contacts"}><MailSVG/> hello@createx.com</NavLink></li>
                </ul>
                <div className={style.signUp}>
                    <p className={style.title}>SIGN UP TO OUR NEWSLETTER</p>
                    <FooterForm onSubmit={submit}/>
                    <p className={style.description}>*Subscribe to our newsletter to receive communications and early
                        updates from Createx SEO Agency.</p>
                </div>
            </div>
            <section>
                <p>© All rights reserved. Made with <HeartSVG/> by Createx Studio </p>
                <button onClick={goTop}>GO TO TOP</button>
            </section>
        </footer>
    );
};

export default Footer;