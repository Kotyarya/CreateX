import React from 'react';
import PageTitle from "../../Components/PageTitle/PageTitle";
import {useTypedSelector} from "../../hook/useTypedSelector";

const EventTitle = () => {

    const title = useTypedSelector(state => state.events.activeEvent?.title)
    const type = useTypedSelector(state => state.events.activeEvent?.eventType.name)

    return <PageTitle title={title} type={type}/>
};

export default EventTitle;