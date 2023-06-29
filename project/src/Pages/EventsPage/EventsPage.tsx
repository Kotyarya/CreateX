import React from 'react';
import style from "./EventsPage.module.scss"
import EventsContainer from "../../Modules/Events/EventsContainer";

const EventsPage = () => {
    return (
        <div className={style.eventsPage}>
            <div className={style.events}>
                <EventsContainer/>
            </div>
        </div>
    );
};

export default EventsPage;