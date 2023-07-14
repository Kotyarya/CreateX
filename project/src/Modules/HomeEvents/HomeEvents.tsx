import React, {FC} from 'react';
import style from "./EventsInHomePage.module.scss"
import Button, {ButtonSize, ButtonVariant} from "../../Components/Button/Button";
import {IEvent} from "../../Redux/API/eventAPI";
import EventCard from "../../Components/EventCard/EventCard";
import {NavLink} from "react-router-dom";


interface HomeEventsProps {
    events: IEvent[] | undefined,
}


const HomeEvents: FC<HomeEventsProps> = ({events}) => {


    const eventsBlock = events?.map((event) => {
        return (
            <div className={style.event}>
                <EventCard event={event} isGridType={false}/>
            </div>
        )
    })

    return (
        <div className={style.wrapper}>
            <article>
                <p>Our Events</p>
                <h2>Lectures & workshops</h2>
            </article>
            <div className={style.content}>
                {eventsBlock}
            </div>
            <div className={style.wantMore}>
                <p>Do you want more?</p>
                <NavLink to={"/events"}>
                    <Button text={"Explore all events"}
                            variant={ButtonVariant.solid}
                            size={ButtonSize.large}
                    />
                </NavLink>

            </div>
        </div>
    );
};

export default HomeEvents;