import React, {useEffect} from 'react';
import style from "./EventPage.module.scss"
import {useEventId} from "../../../hook/useEventId";
import {useAction} from "../../../hook/useAction";
import ThemesEventContainer from "../../../Modules/ThemesEvent/ThemesEventContainer";
import EventTitle from "../../../Modules/EventTitle/EventTitle";
import AboutSpeakerContainer from "../../../Modules/AboutSpeaker/AboutSpeakerContainer";
import ForWhomEventContainer from "../../../Modules/ForWhomEvent/ForWhomEventContainer";
import SubscribeNewsletterContainer from "../../../Modules/SubscribeInEventPage/SubscribeNewsletterContainer";
import EventCarouselContainer from "../../../Modules/EventCarousel/EventCarouselContainer";
import RegisterForEventContainer from "../../../Modules/RegisterForEvent/RegisterForEventContainer";

const EventPage = () => {
    const eventId = useEventId()

    const {getEventsById} = useAction()

    useEffect(() => {
        getEventsById(eventId)


        return () => {
            getEventsById(0)
        }

        // eslint-disable-next-line
    }, [])


    document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
    return (
        <div className={style.eventPage}>
            <div className={style.head}>
                <EventTitle/>
            </div>
            <div className={style.themes}>
                <ThemesEventContainer/>
            </div>
            <div className={style.group}>
                <div className={style.speaker}>
                    <AboutSpeakerContainer/>
                </div>
                <div className={style.forWhom}>
                    <ForWhomEventContainer/>
                </div>
            </div>
            <div className={style.subscribe}>
                <SubscribeNewsletterContainer/>
            </div>
            <div className={style.joinEvent}>
                <RegisterForEventContainer/>
            </div>
            <div className={style.eventsCarousel}>
                <EventCarouselContainer/>
            </div>
        </div>
    );
};

export default EventPage;