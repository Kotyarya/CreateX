import React, {FC} from 'react';
import style from "./TeamCarousel.module.scss"
import ControlButton, {ControlButtonRotation} from "../../Components/ControlButton/ControlButton";
import {ICurator} from "../../Redux/Other/data";
import {ReactComponent as FacebookSVG} from "../../assets/img/icons/facebookSVG.svg";
import {ReactComponent as InstagramSVG} from "../../assets/img/icons/instagramSVG.svg";
import {ReactComponent as LinkedInSVG} from "../../assets/img/icons/linkedinSVG.svg";
import {nanoid} from "nanoid";


interface TeamCarouselProps {
    translate: number,
    moveCarousel: (num: number) => void,
    curators: { [key: string]: ICurator }
}

const TeamCarousel: FC<TeamCarouselProps> = ({translate, moveCarousel, curators}) => {


    const teamsBlock = Object.keys(curators).map((curator) => {
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
                    <img src={curators[curator].img} alt="img"/>
                </div>
                <article>
                    <h4>{curators[curator].title}</h4>
                    <p>{curators[curator].subtitle}</p>
                </article>
            </div>
        )
    })


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
                    <ControlButton disabled={translate <= -157.5} rotation={ControlButtonRotation.right}
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