import React, {FC, useEffect} from 'react';
import style from "./Courses.module.scss"
import {nanoid} from "nanoid";
import {useTime, useTransform} from "framer-motion";
import SearchInput from "../../Components/Input/SearchInput/SearchInput";
import {useTypedSelector} from "../../hook/useTypedSelector";
import {useAction} from "../../hook/useAction";
import {imgUrl} from "../../utils/const/const";

// interface CoursesProps {
//     allBranch: string[],
//     setFilterCourses: (oneBranch: string) => void,
//     onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void,
//     filterCourses: ICourses[],
//     navigateToCourse: (id: number) => void,
//     courses: ICourses[],
//     activeBranch: branch,
//     loading: boolean,
//     getMoreCourses: (activeBranch: branch) => void
// }

const Courses: FC = () => {


    const time = useTime();
    const rotate = useTransform(time, [0, 4000], [0, 360], {clamp: false});

    const branches = useTypedSelector(state => state.branches.branches)
    const activeBranch = useTypedSelector(state => state.courses.activeBranch)
    const courses = useTypedSelector(state => state.courses.courses)
    const {getBranches, setBranch, getStartCourses} = useAction()

    useEffect(() => {
        getBranches()
        getStartCourses()
    }, [])

    const countAllCourse = branches?.reduce((count, branch) => {
        return count + branch.courseCount
    }, 0)


    return (
        <div className={style.wrapper}>
            <article>
                <p>Enjoy your studying!</p>
                <h2>Our online courses</h2>
            </article>
            <div className={style.controls}>
                <button onClick={() => setBranch(0)}
                        className={activeBranch === 0 ? style.active : undefined}>All <p>{countAllCourse}</p></button>
                {
                    branches ?
                        branches.map((oneBranch) => {
                            return (
                                <button
                                    onClick={() => setBranch(oneBranch.id)}
                                    className={oneBranch.id === activeBranch ? style.active : undefined}
                                    key={nanoid(10)}>
                                    {oneBranch.name}
                                    <p>{oneBranch.courseCount}</p>
                                </button>
                            )
                        })
                        : null}
                <div className={style.searchInput}>
                    <SearchInput width={31.5} placeholder={"Search courses..."} onChange={() => []}/>
                </div>
            </div>
            <div className={style.content}>
                {
                    courses?.map((course) => {
                        return (
                            <div key={course.id} className={style.course}>
                                <div className={style.img}>
                                    <img src={imgUrl + course.curator.img} alt=""/>
                                </div>
                                <div className={style.info}>
                                    <p className={(course.branch.name !== "HR & Recruting" ? style[course.branch.name] : style.hr) + " " + style.branch}>{course.branch.name}</p>
                                    <p className={style.title}>{course.title}</p>
                                    <p className={style.price}><span>${course.price}</span> | {course.curator.name}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {/*{*/}
            {/*    courses.length !== lengthCoursesByBranch[activeBranch.toLowerCase() as keyof typeof lengthCoursesByBranch] ?*/}
            {/*        <button className={style.loadMore} onClick={() => getMoreCourses(activeBranch)}>*/}
            {/*            <motion.div className={style.motionDiv} style={loading ? {rotate} : undefined}><LoadSVG/>*/}
            {/*            </motion.div>*/}
            {/*            Load more*/}
            {/*        </button>*/}
            {/*        : null*/}
            {/*}*/}
        </div>
    );
};

export default Courses;