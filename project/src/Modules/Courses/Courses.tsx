import React, {FC, useEffect, useState} from 'react';
import style from "./Courses.module.scss"
import {nanoid} from "nanoid";
import {motion, useTime, useTransform} from "framer-motion";
import SearchInput from "../../Components/Input/SearchInput/SearchInput";
import {useTypedSelector} from "../../hook/useTypedSelector";
import {useAction} from "../../hook/useAction";
import {imgUrl} from "../../utils/const/const";
import {ReactComponent as LoadSVG} from "../../assets/img/icons/load.svg";

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
    const [page, setPage] = useState<number>(1)
    const [searchText, setSearcText] = useState<string>("")

    const branches = useTypedSelector(state => state.branches.branches)
    const {courses, activeBranch, loading} = useTypedSelector(state => state.courses)
    const {getBranches, getCourseByBranch, getMoreCourses} = useAction()

    useEffect(() => {
        getBranches()
        getCourseByBranch(0, page)
        // eslint-disable-next-line
    }, [])

    const countAllCourse = branches?.reduce((count, branch) => {
        return count + branch.courseCount
    }, 0)

    const filterCourse = courses?.filter((course) => course.title.includes(searchText))

    return (
        <div className={style.wrapper}>
            <article>
                <p>Enjoy your studying!</p>
                <h2>Our online courses</h2>
            </article>
            <div className={style.controls}>
                <button onClick={() => {
                    setPage(1)
                    getCourseByBranch(0, 1)
                }}
                        className={activeBranch === 0 ? style.active : undefined}>All <p>{countAllCourse}</p></button>
                {
                    branches ?
                        branches.map((oneBranch) => {
                            return (
                                <button
                                    onClick={() => getCourseByBranch(oneBranch.id, 1)}
                                    className={oneBranch.id === activeBranch ? style.active : undefined}
                                    key={nanoid(10)}>
                                    {oneBranch.name}
                                    <p>{oneBranch.courseCount}</p>
                                </button>
                            )
                        })
                        : null}
                <div className={style.searchInput}>
                    <SearchInput width={31.5} placeholder={"Search courses..."}
                                 onChange={(e) => setSearcText(e.target.value)}/>
                </div>
            </div>
            <div className={style.content}>
                {
                    filterCourse?.map((course) => {
                        console.log(course)
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
            <button className={style.loadMore} onClick={() => {
                setPage(page + 1)
                getMoreCourses(activeBranch, page + 1)
            }}>
                <motion.div className={style.motionDiv} style={loading ? {rotate} : undefined}><LoadSVG/>
                </motion.div>
                Load more
            </button>
        </div>
    );
};

export default Courses;