import React, {FC} from 'react';
import style from "./EventCard.module.scss";
import Button, {ButtonSize, ButtonVariant} from "../Button/Button";
import {IEvent} from "../../Redux/API/eventAPI";
import {NavLink} from "react-router-dom";
import {markText} from "../../utils/helpers/markText";

interface EventCardProps {
    event: IEvent,
    isGridType: boolean,
    searchText?: string
}

const EventCard: FC<EventCardProps> = ({event, isGridType, searchText}) => {


    const dateBlock = (eventDay: string, eventMonth: string, eventTime: string) => {
        if (!isGridType) {
            return (
                <div className={style.date}>
                    <p className={style.number}>{eventDay}</p>
                    <div className={style.monthTime}>
                        <p className={style.month}>{eventMonth}</p>
                        <p className={style.time}>{eventTime}</p>
                    </div>
                </div>
            )
        } else {
            return (
                <div className={style.date}>
                    <p className={style.number}>{eventDay} {eventMonth.slice(0, 3)}</p>
                    <p className={style.time}>{eventTime}</p>
                </div>
            )
        }
    }

    return (
        <div key={event.id} className={style.event + " " + (isGridType ? style.gridEvent : style.flexEvent)}>
            {
                dateBlock(event.day, event.month, event.time)
            }
            <div className={style.text}>
                {markText(event.title, searchText || "", style.title)}
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