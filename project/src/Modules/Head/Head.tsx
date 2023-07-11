import React, {FC} from 'react';
import style from "./Head.module.scss"
import PlayButton, {PlayButtonSize} from "../../Components/PlayButton/PlayButton";
import Button, {ButtonSize, ButtonVariant} from "../../Components/Button/Button";
import illustration from "./img/illustration.png"
import {NavLink} from "react-router-dom";


const Head: FC = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.title}>
                <div className={style.content}>
                    <div className={style.play}>
                        <PlayButton size={PlayButtonSize.small}/>
                        Play showreel
                    </div>
                    <h1>Enjoy studying with CreateX Online Courses</h1>
                    <div className={style.controls}>
                        <NavLink to={"/about-us"}>
                            <Button text={"About us"}
                                    variant={ButtonVariant.outline}
                                    size={ButtonSize.large}/>
                        </NavLink>
                        <NavLink to={"/courses"}>
                            <Button text={"Explore courses"}
                                    variant={ButtonVariant.solid}
                                    size={ButtonSize.large}/>
                        </NavLink>
                    </div>
                </div>
                <img src={illustration} alt="illustration"/>
            </div>
            <div className={style.statistic}>
                <div>
                    <p className={style.number}>1200</p>
                    <p className={style.text}>Students graduated</p>
                </div>
                <span></span>
                <div>
                    <p className={style.number}>84</p>
                    <p className={style.text}>Completed courses</p>
                </div>
                <span></span>
                <div>
                    <p className={style.number}>16</p>
                    <p className={style.text}>Qualified tutors</p>
                </div>
                <span></span>
                <div>
                    <p className={style.number}>5</p>
                    <p className={style.text}>Years of experience</p>
                </div>
            </div>
        </div>
    );
};

export default Head;