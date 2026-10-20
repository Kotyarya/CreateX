import React from 'react';
import style from "./EventsPage.module.scss"
import EventsContainer from "../../Modules/Events/EventsContainer";
import SubscribeContainer from "../../Modules/Subscribe/SubscribeContainer";

const EventsPage = () => {
    document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })

    return (
        <div className={style.eventsPage}>
            <div className={style.events}>
                <EventsContainer/>
            </div>
            <div>
                <SubscribeContainer/>
            </div>
        </div>
    );
};

export default EventsPage;