import React, {FC} from 'react';
import style from "./AboutCurator.module.scss"
import {ReactComponent as FacebookSVG} from "../../assets/img/icons/facebookSVG.svg";
import {ReactComponent as BehanceSVG} from "../../assets/img/icons/behance.svg";
import {ReactComponent as TwitterSVG} from "../../assets/img/icons/twitterSVG.svg";
import {ReactComponent as LinkedInSVG} from "../../assets/img/icons/linkedinSVG.svg";
import {ICurator} from "../../Redux/Other/data";

interface AboutCuratorProps {
    curator: ICurator
}

const AboutCurator: FC<AboutCuratorProps> = ({curator}) => {


    return (
        <div className={style.wrapper}>
            <div className={style.img}>
                <img src={curator.img} alt=""/>
            </div>
            <div className={style.content}>
                <article>
                    <p>course curator</p>
                    <h3>{curator.title}</h3>
                </article>
                <p className={style.subtitle}>{curator.subtitle}</p>
                <div className={style.statistic}>
                    <p className={style.rate}>{curator.rate} rate</p>
                    <p className={style.courses}>{curator.numberCourses} courses</p>
                    <p className={style.students}>{curator.students} students</p>
                </div>
                <p className={style.description}>{curator.description}</p>
                <div className={style.social}>
                    <FacebookSVG/>
                    <BehanceSVG/>
                    <TwitterSVG/>
                    <LinkedInSVG/>
                </div>
            </div>
        </div>
    );
};

export default AboutCurator;