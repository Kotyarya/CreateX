import React, {useEffect} from 'react';
import style from "./EventPage.module.scss"
import {useEventId} from "../../../hook/useEventId";
import {useAction} from "../../../hook/useAction";
import {useTypedSelector} from "../../../hook/useTypedSelector";
import ThemesEventContainer from "../../../Modules/ThemesEvent/ThemesEventContainer";
import EventTitle from "../../../Modules/EventTitle/EventTitle";

const EventPage = () => {
    const eventId = useEventId()

    const {getEventsById} = useAction()
    const {activeEvent} = useTypedSelector(state => state.events)
    console.log(activeEvent)

    useEffect(() => {
        getEventsById(eventId)
        // eslint-disable-next-line
    }, [])
    return (
        <div className={style.eventPage}>
            <div className={style.head}>
                <EventTitle/>
            </div>
            <div className={style.themes}>
                <ThemesEventContainer/>
            </div>
        </div>
    );
};

export default EventPage;