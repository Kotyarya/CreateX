import React, {FC} from 'react';
import style from "./TeamCarousel.module.scss"
import ControlButton, {ControlButtonRotation} from "../../Components/ControlButton/ControlButton";
import {ReactComponent as FacebookSVG} from "../../assets/img/icons/facebookSVG.svg";
import {ReactComponent as InstagramSVG} from "../../assets/img/icons/instagramSVG.svg";
import {ReactComponent as LinkedInSVG} from "../../assets/img/icons/linkedinSVG.svg";
import {nanoid} from "nanoid";
import {imgUrl} from "../../utils/const/const";
import {ICurator} from "../../Redux/API/curatorAPI";


interface TeamCarouselProps {
    translate: number,
    moveCarousel: (num: number) => void,
    curators: ICurator[] | undefined
}

const TeamCarousel: FC<TeamCarouselProps> = ({translate, moveCarousel, curators}) => {


    const teamsBlock = curators ? curators.map((curator) => {
        return (
            <div className={style.block} key={nanoid(10)}>
                <div className={style.img}>
                    <div className={style.gradient}>
                        <div>
                            <FacebookSVG/>
                            <InstagramSVG/>
                            <LinkedInSVG/>
                        </div>

                    </div>
                    <img src={imgUrl + curator.img} alt="img"/>
                </div>
                <article>
                    <h4>{curator.name}</h4>
                    <p>{curator.jobTitle}</p>
                </article>
            </div>
        )
    }) : null


    return (
        <div className={style.wrapper}>
            <div className={style.head}>
                <article>
                    <p>Best tutors are all here</p>
                    <h2>Meet our team</h2>
                </article>
                <div className={style.controls}>
                    <ControlButton disabled={translate >= 0} rotation={ControlButtonRotation.left}
                                   onClick={() => moveCarousel(translate + 31.5)}/>
                    <ControlButton disabled={curators ? translate <= -((curators?.length - 4) * 31.5) : false}
                                   rotation={ControlButtonRotation.right}
                                   onClick={() => moveCarousel(translate - 31.5)}/>
                </div>
            </div>
            <div className={style.carousel}>
                <div className={style.content} style={{transform: `translateX(${translate}rem)`}}>
                    {teamsBlock}
                </div>
            </div>
        </div>
    );
};

export default TeamCarousel;