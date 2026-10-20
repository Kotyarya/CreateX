import React from 'react';
import {useTypedSelector} from "../../hook/useTypedSelector";
import ForWhom from "../../Components/ForWhom/ForWhomCourse";
import {ForWhomType} from "../../Components/ForWhom/ForWhomTypes";

const ForWhomEventContainer = () => {
    const forWhom = useTypedSelector(state => state.events.activeEvent?.forWhom)
    return <ForWhom forWhom={forWhom} type={ForWhomType.event}/>
};

export default ForWhomEventContainer;