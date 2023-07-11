import React, {FC} from 'react';
import style from "./EventCard.module.scss";
import Button, {ButtonSize, ButtonVariant} from "../Button/Button";
import {IEvent} from "../../Redux/API/eventAPI";
import {NavLink} from "react-router-dom";

interface EventCardProps {
    event: IEvent
}

const EventCard: FC<EventCardProps> = ({event}) => {
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
                <NavLink to={`/events/${event.id}`}>
                    <Button text={"View more"}
                            variant={ButtonVariant.outline}
                            size={ButtonSize.regular}
                    />
                </NavLink>

            </div>
        </div>
    );
};

export default EventCard;