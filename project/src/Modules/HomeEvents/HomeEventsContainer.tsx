import React, {FC, useEffect} from 'react';
import HomeEvents from "./HomeEvents";
import {useTypedSelector} from "../../hook/useTypedSelector";
import {useAction} from "../../hook/useAction";

const HomeEventsContainer: FC = () => {

    const {events} = useTypedSelector(state => state.events)

    const {getStartEvents} = useAction()

    useEffect(() => {
        getStartEvents()
        // eslint-disable-next-line
    }, [])


    return <HomeEvents events={events}/>
};

export default HomeEventsContainer;