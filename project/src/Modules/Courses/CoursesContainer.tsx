// import React, {FC, useEffect, useState} from 'react';
// import Courses from "./Courses";
// import {useAction} from "../../hook/useAction";
// import {branch} from "../../Redux/Other/data";
// import {useTypedSelector} from "../../hook/useTypedSelector";
// import {useNavigate} from "react-router-dom";
//
// const CoursesContainer: FC = () => {
//
//     const {setActiveBranch, filterCoursesByBranch, getCourses, getMoreCourses} = useAction()
//
//
//     const allBranch: string[] = Object.keys(branch)
//     const {courses, activeBranch, loading} = useTypedSelector(state => state.courses)
//     const navigate = useNavigate()
//     const [value, setValue] = useState<string>("")
//
//
//     useEffect(() => {
//         getCourses()
//         // eslint-disable-next-line
//     }, [])
//
//     const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setValue(e.target.value)
//     }
//
//     const filterCourses = courses.filter((course) => course.title.toLowerCase().includes(value.toLowerCase()))
//     const setFilterCourses = (oneBranch: string) => {
//         setActiveBranch(oneBranch)
//         filterCoursesByBranch(oneBranch)
//     }
//
//     const navigateToCourse = (id: number) => {
//         navigate(`/courses/${id}`)
//     }
//
//     return (
//         <Courses
//             allBranch={allBranch}
//             setFilterCourses={setFilterCourses}
//             onChangeHandler={onChangeHandler}
//             filterCourses={filterCourses}
//             navigateToCourse={navigateToCourse}
//             courses={courses}
//             activeBranch={activeBranch}
//             loading={loading}
//             getMoreCourses={getMoreCourses}
//         />
//     );
// };
//
// export default CoursesContainer;
export {}