import React, {FC} from 'react';
import style from "./EventsInHomePage.module.scss"
import Button, {ButtonSize, ButtonVariant} from "../../Components/Button/Button";
import {IEvent} from "../../Redux/API/eventAPI";


interface EventsInHomePageProps {
    events: IEvent[] | undefined,
    onClickButton: () => void,
    onClickButtonEvent: (eventID: number) => void
}


const EventsInHomePage: FC<EventsInHomePageProps> = ({events, onClickButton, onClickButtonEvent}) => {


    const eventsBlock = events?.map((event) => {
        return (
            <div key={event.id} className={style.event}>
                <div className={style.date}>
                    <div className={style.number}>{event.day}</div>
                    <div className={style.monthTime}>
                        <p className={style.month}>{event.month}</p>
                        <p className={style.time}>{event.time}</p>
                    </div>
                </div>
                <div className={style.text}>
                    <p className={style.title}>{event.title}</p>
                    <p className={style.type}>{event.eventType.name}</p>
                </div>
                <div className={style.viewMore}>
                    <Button text={"View more"}
                            variant={ButtonVariant.outline}
                            size={ButtonSize.regular}
                            onClick={() => onClickButtonEvent(event.id)}
                    />
                </div>
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
                        onClick={onClickButton}
                />
            </div>
        </div>
    );
};

export default EventsInHomePage;