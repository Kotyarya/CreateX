import React from 'react';
import ForWhomCourse from "../ForWhomCourse/ForWhomCourse";
import {useTypedSelector} from "../../hook/useTypedSelector";

const ForWhomEventContainer = () => {
    const forWhom = useTypedSelector(state => state.events.activeEvent?.forWhom)

    return <ForWhomCourse forWhom={forWhom}/>
};

export default ForWhomEventContainer;