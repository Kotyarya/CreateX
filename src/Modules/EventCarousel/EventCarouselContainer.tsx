import React, {useEffect} from 'react';
import EventCarousel from "./EventCarousel";
import {useAction} from "../../hook/useAction";
import {useTypedSelector} from "../../hook/useTypedSelector";
import {SortBy} from "../../Redux/API/event/eventAPI";

const EventCarouselContainer = () => {
    const {getEvents} = useAction()
    const events = useTypedSelector(state => state.events.events)

    useEffect(() => {
        getEvents(10, 0, 1, "", SortBy.ASC)
        //eslint-disable-next-line
    }, [])

    return <EventCarousel events={events}/>
};

export default EventCarouselContainer;