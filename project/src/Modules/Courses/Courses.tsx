import React, {FC} from 'react';
import style from "./Courses.module.scss"
import {branch, ICourses, lengthCoursesByBranch} from "../../Redux/Other/data";
import {nanoid} from "nanoid";
import {ReactComponent as LoadSVG} from "../../assets/img/icons/load.svg";
import {motion, useTime, useTransform} from "framer-motion";
import SearchInput from "../../Components/Input/SearchInput/SearchInput";

interface CoursesProps {
    allBranch: string[],
    setFilterCourses: (oneBranch: string) => void,
    onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void,
    filterCourses: ICourses[],
    navigateToCourse: (id: number) => void,
    courses: ICourses[],
    activeBranch: branch,
    loading: boolean,
    getMoreCourses: (activeBranch: branch) => void
}

const Courses: FC<CoursesProps> = ({
                                       allBranch,
                                       setFilterCourses,
                                       onChangeHandler,
                                       filterCourses,
                                       navigateToCourse,
                                       courses,
                                       activeBranch,
                                       loading,
                                       getMoreCourses
                                   }) => {


    const time = useTime();
    const rotate = useTransform(time, [0, 4000], [0, 360], {clamp: false});


    return (
        <div className={style.wrapper}>
            <article>
                <p>Enjoy your studying!</p>
                <h2>Our online courses</h2>
            </article>
            <div className={style.controls}>
                {allBranch.map((oneBranch: string) => {
                    return (
                        <button onClick={() => setFilterCourses(oneBranch)}
                                className={activeBranch === branch[oneBranch as keyof typeof branch] ? style.active : ""}
                                key={nanoid(10)}>
                            {oneBranch === "hr" ? "HR & Recruting" : branch[oneBranch as keyof typeof branch]}
                            <p>{lengthCoursesByBranch[oneBranch as keyof typeof lengthCoursesByBranch]}</p>
                        </button>
                    )
                })}
                <div className={style.searchInput}>
                    <SearchInput width={31.5} placeholder={"Search courses..."} onChange={onChangeHandler}/>
                </div>
            </div>
            <div className={style.content}>
                {filterCourses.map((course) => {
                    return (
                        <div key={course.id} className={style.course} onClick={() => navigateToCourse(course.id)}>
                            <div className={style.img}>
                                <img src={course.photo} alt=""/>
                            </div>
                            <div className={style.info}>
                                <p className={style.branch + " " + style[course.branch]}>{course.branch === "hr" ? "HR & Recruting" : course.branch}</p>
                                <p className={style.title}>{course.title}</p>
                                <p className={style.price}><span>$ {course.price}</span> | {course.author}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            {
                courses.length !== lengthCoursesByBranch[activeBranch.toLowerCase() as keyof typeof lengthCoursesByBranch] ?
                    <button className={style.loadMore} onClick={() => getMoreCourses(activeBranch)}>
                        <motion.div className={style.motionDiv} style={loading ? {rotate} : undefined}><LoadSVG/>
                        </motion.div>
                        Load more
                    </button>
                    : null
            }
        </div>
    );
};

export default Courses;