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
import {navLinks} from "../../utils/const/navLinks";
import {nanoid} from "nanoid";
import {FooterTypes} from "./FooterTypes";
import {useSkeleton} from "../../hook/useSkeleton";


const Footer: FC<FooterTypes> = ({goTop, submit, branches, onClickToCoursePage, loading}) => {

    const branchList = branches?.map((branch) => {
        return (
            <li key={branch.id} onClick={() => onClickToCoursePage(branch.id)}>
                <p>{branch.name}</p>
            </li>
        )
    })

    const skeletonBlocks = useSkeleton(5, 10.8, 2.6, true)


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
                    <p className={style.linkTitle}>Site map</p>
                    {
                        navLinks.map((navLink) => {
                            return (
                                <li key={nanoid(10)}>
                                    <NavLink to={navLink.path}>{navLink.label}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
                <ul>
                    <p className={style.linkTitle}>Courses</p>
                    {
                        loading ?
                            skeletonBlocks :
                            branchList
                    }
                </ul>
                <ul>
                    <p className={style.linkTitle}>Contact us</p>
                    <li><a href={"tel:(405) 555-0128"}><PhoneSVG/> (405) 555-0128</a></li>
                    <li><a href={"mailto:hello@createx.com"}><MailSVG/> hello@createx.com</a></li>
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