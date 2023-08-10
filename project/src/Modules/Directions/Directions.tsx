import React, {useEffect} from 'react';
import style from "./Directions.module.scss"
import {useTypedSelector} from "../../hook/useTypedSelector";
import {useAction} from "../../hook/useAction";
import {imgUrl} from "../../utils/const/const";
import {ReactComponent as ArrowSVG} from "../../assets/img/icons/Right.svg";
import {useNavigate} from "react-router-dom";

const Directions = () => {

    const branches = useTypedSelector(state => state.branches.branches)
    const {getBranches, setActiveBranch} = useAction()
    const navigate = useNavigate()

    useEffect(() => {
        getBranches()
        // eslint-disable-next-line
    }, [])

    const navigateToCoursesPage = (branchId: number) => {
        setActiveBranch(branchId)
        navigate("/courses")
    }

    return (
        <div className={style.wrapper}>
            <article>
                <p>our main directions</p>
                <h2>What do we teach</h2>
            </article>
            <div className={style.content}>
                {branches?.map((branch) => {
                    const classNameBranch = branch.name !== "HR & Recruting" ? style[branch.name] : style.hr

                    return (
                        <div className={style.block} key={branch.id}>
                            <img src={imgUrl + branch.img} alt=""/>
                            <div className={style.info}>
                                <p className={style.branch + " " + classNameBranch}>{branch.name}</p>
                                <p className={style.text}>{branch.text.slice(0, 134)}...<span></span></p>
                                <p className={style.link} onClick={() => navigateToCoursesPage(branch.id)}>Check
                                    Courses <ArrowSVG/></p>
                            </div>
                        </div>
                    )
                })}
                <div className={style.nullBlock}>
                    <p>New studying program coming soon...</p>
                </div>
            </div>
        </div>
    );
};

export default Directions;