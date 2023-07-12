import React, {FC} from 'react';
import PageTitle from "../../Components/PageTitle/PageTitle";
import {useTypedSelector} from "../../hook/useTypedSelector";

const CourseTitle: FC = () => {
    const title = useTypedSelector(state => state.courses.activeCourse?.title)

    return <PageTitle title={title ? title : ""} type={"courses"}/>
};

export default CourseTitle;