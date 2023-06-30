import React, {FC, useEffect} from 'react';
import EventsInHomePage from "./EventsInHomePage";
import {useTypedSelector} from "../../hook/useTypedSelector";
import {useAction} from "../../hook/useAction";
import {useNavigate} from "react-router-dom";

const EventsInHomePageContainer: FC = () => {

    const {events} = useTypedSelector(state => state.events)

    const {getStartEvents} = useAction()

    const navigate = useNavigate()

    const navigateToEvent = (eventID: number) => {
        navigate(`/events/${eventID}`)
    }

    const navigateToEventsPage = () => {
        navigate("/events")
    }
    useEffect(() => {
        getStartEvents()
        // eslint-disable-next-line
    }, [])


    return <EventsInHomePage events={events} onClickButtonEvent={navigateToEvent} onClickButton={navigateToEventsPage}/>
};

export default EventsInHomePageContainer;