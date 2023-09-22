import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import Courses from "./Courses";
import {useTypedSelector} from "../../hook/useTypedSelector";
import {useAction} from "../../hook/useAction";
import {useDebounce} from "../../hook/useDebounce";

const CoursesContainer: FC = () => {

    const [page, setPage] = useState<number>(1)
    const [searchText, setSearchText] = useState<string>("")
    const branches = useTypedSelector(state => state.branches.branches)
    const branchesLoading = useTypedSelector(state => state.branches.loading)
    const {courses, activeBranch, loading} = useTypedSelector(state => state.courses)
    const {getBranches, getCourseByBranch, getMoreCourses} = useAction()
    const debounceGetCourseByBranch = useDebounce(getCourseByBranch, 200)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPage(1)
        setSearchText(e.target.value)
        debounceGetCourseByBranch(activeBranch || 0, page, e.target.value)
    }

    const changeBranch = (branchId: number, page: number) => {
        setPage(page)
        getCourseByBranch(branchId, 1, searchText)
    }

    const loadMore = () => {
        debugger
        setPage(page + 1)
        getMoreCourses(activeBranch, page + 1, searchText)
    }


    useEffect(() => {
        getBranches()
        if (!loading) {
            getCourseByBranch(activeBranch || 0, page, searchText)
        }
        // eslint-disable-next-line
    }, [])

    return (
        <Courses courses={courses}
                 loading={loading}
                 searchText={searchText}
                 loadMore={loadMore}
                 branches={branches}
                 activeBranch={activeBranch}
                 onChangeHandler={onChangeHandler}
                 changeBranch={changeBranch}
                 branchesLoading={branchesLoading}
        />
    );
};

export default CoursesContainer;