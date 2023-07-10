import React, {ChangeEvent, FC} from 'react';
import style from "./Courses.module.scss"
import {nanoid} from "nanoid";
import {motion, useTime, useTransform} from "framer-motion";
import SearchInput from "../../Components/Input/SearchInput/SearchInput";
import {imgUrl} from "../../utils/const/const";
import {ReactComponent as LoadSVG} from "../../assets/img/icons/load.svg";
import {IBranch} from "../../Redux/API/branchAPI";
import {ICourse} from "../../Redux/API/coursesAPI";
import {markText} from "../../utils/helpers/markText";

interface CoursesProps {
    searchText: string,
    onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void,
    branches: IBranch[] | undefined,
    filterCourses: ICourse[] | undefined,
    activeBranch: number,
    loading: boolean,
    changeBranch: (branchId: number, page: number) => void,
    loadMore: () => void,
    navigateToCourse: (courseId: number) => void
}


const Courses: FC<CoursesProps> = ({
                                       searchText,
                                       onChangeHandler,
                                       branches,
                                       filterCourses,
                                       activeBranch,
                                       loading,
                                       changeBranch,
                                       loadMore,
                                       navigateToCourse
                                   }) => {


    const time = useTime();
    const rotate = useTransform(time, [0, 4000], [0, 360], {clamp: false});


    const countAllCourse = branches?.reduce((count, branch) => {
        return count + branch.courseCount
    }, 0)


    let loadButton
    if (branches && countAllCourse) {
        if (activeBranch === 0 && countAllCourse > 9) {
            loadButton = true
        } else {
            loadButton = branches.filter((branch) => branch.id === activeBranch)[0].courseCount > 9
        }
    }


    const branchesButton = branches?.map((oneBranch) => {
        return (
            <button
                onClick={() => changeBranch(oneBranch.id, 1)}
                className={oneBranch.id === activeBranch ? style.active : undefined}
                key={nanoid(10)}>
                {oneBranch.name}
                <p>{oneBranch.courseCount}</p>
            </button>
        )
    })
    const filterCoursesBlocks = filterCourses?.map((course) => {
        return (
            <div key={course.id} className={style.course} onClick={() => navigateToCourse(course.id)}>
                <div className={style.img}>
                    <img src={imgUrl + course.curator.img} alt=""/>
                </div>
                <div className={style.info}>
                    <p className={(course.branch.name !== "HR & Recruting" ? style[course.branch.name] : style.hr) + " " + style.branch}>{course.branch.name}</p>
                    {markText(course.title, searchText, style.title)}
                    <p className={style.price}><span>${course.price}</span> | {course.curator.name}</p>
                </div>
            </div>
        )
    })


    return (
        <div className={style.wrapper}>
            <article>
                <p>Enjoy your studying!</p>
                <h2>Our online courses</h2>
            </article>
            <div className={style.controls}>
                <button onClick={() => changeBranch(0, 1)}
                        className={activeBranch === 0 ? style.active : undefined}>All <p>{countAllCourse}</p></button>
                {
                    branchesButton
                }
                <div className={style.searchInput}>
                    <SearchInput width={31.5} placeholder={"Search courses..."}
                                 onChange={onChangeHandler} value={searchText}/>
                </div>
            </div>
            <div className={style.content}>
                {filterCoursesBlocks}
            </div>
            {
                loadButton ?
                    <button className={style.loadMore} onClick={loadMore}>
                        <motion.div className={style.motionDiv} style={loading ? {rotate} : undefined}><LoadSVG/>
                        </motion.div>
                        Load more
                    </button> : null
            }
        </div>
    )
};


export default Courses;