import React, {FC, useEffect} from 'react';
import style from "./Courses.module.scss"
import {useTypedSelector} from "../../hook/useTypedSelector";
import {branch, lengthCoursesByBranch} from "../../Redux/Other/data";
import {nanoid} from "nanoid";
import {useAction} from "../../hook/useAction";

const Courses: FC = () => {

    const {setActiveBranch, filterCoursesByBranch, getCourses} = useAction()


    useEffect(() => {
        getCourses()
        // eslint-disable-next-line
    }, [])

    const allBranch: string[] = Object.keys(branch)
    const {courses, activeBranch} = useTypedSelector(state => state.courses)


    return (
        <div className={style.wrapper}>
            <article>
                <p>Enjoy your studying!</p>
                <h2>Our online courses</h2>
            </article>
            <div className={style.controls}>
                {allBranch.map((oneBranch: string) => {
                    return (
                        <button onClick={() => {
                            setActiveBranch(oneBranch)
                            filterCoursesByBranch(oneBranch)
                        }}
                                className={activeBranch === branch[oneBranch as keyof typeof branch] ? style.active : ""}
                                key={nanoid(10)}>
                            {oneBranch === "hr" ? "HR & Recruting" : branch[oneBranch as keyof typeof branch]}
                            <p>{lengthCoursesByBranch[oneBranch as keyof typeof lengthCoursesByBranch]}</p>
                        </button>
                    )
                })}
            </div>
            <div className={style.content}>
                {courses.map((course) => {
                    return (
                        <div key={course.id}>{course.branch}{course.title}</div>
                    )
                })}
            </div>
        </div>
    );
};

export default Courses;