import React, {FC} from 'react';
import style from "./HomeEvents.module.scss"
import Button from "../../Components/Button/Button";
import EventCard from "../../Components/EventCard/EventCard";
import {ButtonSize, ButtonVariant} from "../../Components/Button/ButtonTypes";
import {useNavigateTo} from "../../hook/useNavigateTo";
import {HomeEventsTypes} from "./HomeEventsTypes";


const HomeEvents: FC<HomeEventsTypes> = ({events}) => {

    const {navigateToEventsPage} = useNavigateTo()

    const eventsBlock = events?.map((event) => {
        return (
            <div key={event.id} className={style.event}>
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
                <Button text={"Explore all events"}
                        variant={ButtonVariant.solid}
                        size={ButtonSize.large}
                        onClick={navigateToEventsPage}
                />
            </div>
        </div>
    );
};

export default HomeEvents;