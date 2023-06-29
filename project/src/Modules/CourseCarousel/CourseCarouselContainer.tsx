import React, {useEffect, useState} from 'react';
import CourseCarousel from "./CourseCarousel";
import {useTypedSelector} from "../../hook/useTypedSelector";
import {useAction} from "../../hook/useAction";
import {useNavigate} from "react-router-dom";

const CourseCarouselContainer = () => {

    const courses = useTypedSelector(state => state.courses.courses)
    const {getStartCourses} = useAction()
    const [translate, setTranslate] = useState<number>(0)
    const navigate = useNavigate()

    useEffect(() => {
        getStartCourses()
        // eslint-disable-next-line
    }, [])

    const onClickButtonCourse = () => {
        navigate("/courses")
    }

    const moveCarousel = (num: number) => {
        setTranslate(num)
    }

    return <CourseCarousel courses={courses} translate={translate} onClickButtonCourse={onClickButtonCourse}
                           moveCarousel={moveCarousel}/>
};

export default CourseCarouselContainer;