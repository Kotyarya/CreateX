import React from 'react';
import ForWhom, {ForWhomType} from "../../Components/ForWhom/ForWhomCourse";
import {useTypedSelector} from "../../hook/useTypedSelector";

const ForWhomEventContainer = () => {
    const forWhom = useTypedSelector(state => state.events.activeEvent?.forWhom)

    return <ForWhom forWhom={forWhom} type={ForWhomType.event}/>
};

export default ForWhomEventContainer;