import React, {FC} from 'react';
import style from "./EventCarousel.module.scss"
import EventCard from "../../Components/EventCard/EventCard";
import ControlButton, {ControlButtonRotation} from "../../Components/ControlButton/ControlButton";
import Button from "../../Components/Button/Button";
import {ButtonSize, ButtonVariant} from "../../Components/Button/ButtonTypes";
import {useCarousel} from "../../hook/useCarousel";
import {EventCarouselTypes} from "./EventCarouselTypes";

const EventCarousel: FC<EventCarouselTypes> = ({events}) => {

    const {translate, onMoveBack, onMoveForward} = useCarousel(42)


    return (
        <div className={style.wrapper}>
            <div className={style.head}>
                <article>
                    <p>Check other online events</p>
                    <h2>You may be interested in</h2>
                </article>
                <div className={style.control}>
                    <ControlButton rotation={ControlButtonRotation.left} disabled={translate === 0}
                                   onClick={onMoveBack}/>
                    <ControlButton rotation={ControlButtonRotation.right}
                                   disabled={translate <= -294}
                                   onClick={onMoveForward}/>
                </div>
            </div>
            <div className={style.carousel}>
                <div className={style.content} style={{transform: `translateX(${translate}rem)`}}>
                    {
                        events?.map((event) => <EventCard key={event.id} event={event} isGridType={true}/>)
                    }
                </div>
            </div>
            <div className={style.allEvents}>
                <p>Do you want more?</p>
                <Button text={"Explore all events"} variant={ButtonVariant.solid} size={ButtonSize.large}/>
            </div>
        </div>
    );
};

export default EventCarousel;