import React, {FC} from 'react';
import style from "./AboutCurator.module.scss"
import {ReactComponent as FacebookSVG} from "../../assets/img/icons/facebookSVG.svg";
import {ReactComponent as BehanceSVG} from "../../assets/img/icons/behance.svg";
import {ReactComponent as TwitterSVG} from "../../assets/img/icons/twitterSVG.svg";
import {ReactComponent as LinkedInSVG} from "../../assets/img/icons/linkedinSVG.svg";
import {ICurator} from "../../Redux/API/curatorAPI";
import {imgUrl} from "../../utils/const/const";

export enum AboutCuratorType {
    curator = "course curator",
    speaker = "speaker"
}

interface AboutCuratorProps {
    curator: ICurator | undefined,
    type: AboutCuratorType
}

const AboutCurator: FC<AboutCuratorProps> = ({curator, type}) => {
    return (
        <div className={style.wrapper}>
            <div className={style.img}>
                <img src={imgUrl + curator?.img} alt=""/>
            </div>
            <div className={style.content}>
                <article>
                    <p>{type}</p>
                    <h3>{curator?.name}</h3>
                </article>
                <p className={style.subtitle}>{curator?.jobTitle}</p>
                <div className={style.statistic}>
                    <p className={style.rate}>{curator?.rate} rate</p>
                    <p className={style.courses}>2 courses</p>
                    <p className={style.students}>{curator?.students} students</p>
                </div>
                <p className={style.description}>{curator?.description}</p>
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