import React, {FC} from 'react';
import style from "./Directions.module.scss"
import {imgUrl} from "../../utils/const/imgUrl";
import {ReactComponent as ArrowSVG} from "../../assets/icons/other/Right.svg";
import {DirectionsTypes} from "./DirectionsTypes";
import {useSkeleton} from "../../hook/useSkeleton";


const Directions: FC<DirectionsTypes> = ({branches, navigateToCoursesPageHandler, loading}) => {

    const branchBlocks = branches?.map((branch) => {
        const classNameBranch = branch.name !== "HR & Recruting" ? style[branch.name] : style.hr

        return (
            <div className={style.block} key={branch.id}>
                <img src={imgUrl + branch.img} alt=""/>
                <div className={style.info}>
                    <p className={style.branch + " " + classNameBranch}>{branch.name}</p>
                    <p className={style.text}>{branch.text.slice(0, 134)}...<span></span></p>
                    <p className={style.link} onClick={() => navigateToCoursesPageHandler(branch.id)}>Check
                        Courses <ArrowSVG/></p>
                </div>
            </div>
        )
    })

    const skeletonBlocks = useSkeleton(5)

    return (
        <div className={style.wrapper}>
            <article>
                <p>our main directions</p>
                <h2>What do we teach</h2>
            </article>
            <div className={style.content}>
                {
                    loading ?
                        skeletonBlocks :
                        branchBlocks
                }
                <div className={style.nullBlock}>
                    <p>New studying program coming soon...</p>
                </div>
            </div>
        </div>
    );
};

export default Directions;