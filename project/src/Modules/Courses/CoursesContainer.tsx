import React, {FC} from 'react';
import Courses from "./Courses";

const CoursesContainer: FC = () => {

    // const {setActiveBranch, filterCoursesByBranch, getCourses, getMoreCourses} = useAction()
    //
    //
    // const allBranch: string[] = Object.keys(branch)
    // const {courses, activeBranch, loading} = useTypedSelector(state => state.courses)
    // const navigate = useNavigate()
    // const [value, setValue] = useState<string>("")
    //
    //
    // useEffect(() => {
    //     getCourses()
    //     // eslint-disable-next-line
    // }, [])
    //
    // const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setValue(e.target.value)
    // }
    //
    // const filterCourses = courses.filter((course) => course.title.toLowerCase().includes(value.toLowerCase()))
    // const setFilterCourses = (oneBranch: string) => {
    //     setActiveBranch(oneBranch)
    //     filterCoursesByBranch(oneBranch)
    // }
    //
    // const navigateToCourse = (id: number) => {
    //     navigate(`/courses/${id}`)
    // }

    return (
        <Courses/>
    );
};

export default CoursesContainer;