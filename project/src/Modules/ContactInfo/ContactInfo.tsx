import React from 'react';
import style from './ContactInfo.module.scss'
import {ReactComponent as ChatSVG} from "../../assets/icons/other/Chat.svg";
import {ReactComponent as PhoneSVG} from "../../assets/icons/other/iPhone.svg";
import {ReactComponent as LocationSVG} from "../../assets/icons/other/Location.svg";
import {ReactComponent as FacebookSVG} from "../../assets/icons/socialMedia/facebookSVG.svg";
import {ReactComponent as TwitterSVG} from "../../assets/icons/socialMedia/twitterSVG.svg";
import {ReactComponent as YouTubeSVG} from "../../assets/icons/socialMedia/youtubeSVG.svg";
import {ReactComponent as TelegramSVG} from "../../assets/icons/socialMedia/telegramSVG.svg";
import {ReactComponent as InstagramSVG} from "../../assets/icons/socialMedia/instagramSVG.svg";
import {ReactComponent as LinkedInSVG} from "../../assets/icons/socialMedia/linkedinSVG.svg";

const ContactInfo = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <article>
                    <p>contact info</p>
                    <h2>Get in touch</h2>
                </article>
                <div className={style.info}>
                    <a className={style.block} href={"mailto:hello@createx.com"}>
                        <ChatSVG/>
                        <div className={style.text}>
                            <p className={style.label}>Talk to us:</p>
                            <p>hello@createx.com</p>
                        </div>
                    </a>
                    <a className={style.block} href={"tel:(405) 555-0128"}>
                        <PhoneSVG/>
                        <div className={style.text}>
                            <p className={style.label}>Call us:</p>
                            <p>(405) 555-0128</p>
                        </div>
                    </a>
                    <a className={style.block}
                       rel="noreferrer"
                       target={"_blank"}
                       href={"https://www.google.com/maps/place/Meta/@40.7390383,-73.9883673,16.8z/data=!3m1!5s0x89c259a1e966311b:0xaa9b5a583f466ed2!4m15!1m8!3m7!1s0x89c2593ad569747f:0x3d6dc2d662404da2!2sMeta!8m2!3d40.7373041!4d-73.9882556!10e5!16s%2Fg%2F11f60tsc7g!3m5!1s0x89c2593ad569747f:0x3d6dc2d662404da2!8m2!3d40.7373041!4d-73.9882556!16s%2Fg%2F11f60tsc7g?entry=ttu"}>
                        <LocationSVG/>
                        <div className={style.text}>
                            <p className={style.label}>Address:</p>
                            <p>225 Park Ave S, New York, NY 10003, USA</p>
                        </div>
                    </a>
                </div>
                <div className={style.links}>
                    <p>Follow us:</p>
                    <div className={style.blocks}>
                        <FacebookSVG/>
                        <TwitterSVG/>
                        <YouTubeSVG/>
                        <TelegramSVG/>
                        <InstagramSVG/>
                        <LinkedInSVG/>
                    </div>
                </div>
            </div>
            <div className={style.map}>
                <iframe title={"map"}
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=225%20Park%20Ave%20S,%20New%20York,%20NY%2010003,%20%D0%A1%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D1%96%20%D0%A8%D1%82%D0%B0%D1%82%D0%B8+(Hello)&amp;t=p&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                </iframe>
            </div>
        </div>
    );
};

export default ContactInfo;