import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import Courses from "./Courses";
import {useTypedSelector} from "../../hook/useTypedSelector";
import {useAction} from "../../hook/useAction";

const CoursesContainer: FC = () => {

    const [page, setPage] = useState<number>(1)
    const [searchText, setSearchText] = useState<string>("")
    const branches = useTypedSelector(state => state.branches.branches)
    const {courses, activeBranch, loading} = useTypedSelector(state => state.courses)
    const {getBranches, getCourseByBranch, getMoreCourses} = useAction()


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPage(1)
        setSearchText(e.target.value)
    }

    const changeBranch = (branchId: number, page: number) => {
        setPage(page)
        getCourseByBranch(branchId, 1, searchText)
    }

    const loadMore = () => {
        setPage(page + 1)
        getMoreCourses(activeBranch, page + 1, searchText)
    }


    useEffect(() => {
        getBranches()
        getCourseByBranch(activeBranch || 0, page, searchText)
        // eslint-disable-next-line
    }, [searchText])

    return (
        <Courses courses={courses}
                 loading={loading}
                 searchText={searchText}
                 loadMore={loadMore}
                 branches={branches}
                 activeBranch={activeBranch}
                 onChangeHandler={onChangeHandler}
                 changeBranch={changeBranch}/>
    );
};

export default CoursesContainer;