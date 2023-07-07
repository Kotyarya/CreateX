import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import Courses from "./Courses";
import {useTypedSelector} from "../../hook/useTypedSelector";
import {useAction} from "../../hook/useAction";
import {useNavigate} from "react-router-dom";

const CoursesContainer: FC = () => {

    const [page, setPage] = useState<number>(1)
    const [searchText, setSearchText] = useState<string>("")
    const branches = useTypedSelector(state => state.branches.branches)
    const {courses, activeBranch, loading} = useTypedSelector(state => state.courses)
    const {getBranches, getCourseByBranch, getMoreCourses} = useAction()
    const navigate = useNavigate()


    const filterCourses = courses?.filter((course) => course.title.includes(searchText))
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value)
    }


    const changeBranch = (branchId: number, page: number) => {
        setPage(page)
        getCourseByBranch(branchId, 1)
    }
    const loadMore = () => {
        setPage(page + 1)
        getMoreCourses(activeBranch, page + 1)
    }
    const navigateToCourse = (courseId: number) => {
        navigate(`/courses/${courseId}`)
    }


    useEffect(() => {
        getBranches()
        getCourseByBranch(0, page)
        // eslint-disable-next-line
    }, [])

    return (
        <Courses filterCourses={filterCourses} loading={loading} searchText={searchText} loadMore={loadMore}
                 branches={branches} activeBranch={activeBranch} onChangeHandler={onChangeHandler}
                 changeBranch={changeBranch} navigateToCourse={navigateToCourse}/>
    );
};

export default CoursesContainer;