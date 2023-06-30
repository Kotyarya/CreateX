import React, {useEffect, useState} from 'react';
import style from "./Events.module.scss"
import CustomSelect from "./Select/CustomSelect";
import {useTypedSelector} from "../../hook/useTypedSelector";
import {useAction} from "../../hook/useAction";
import {eventsType} from "../../Redux/Other/data";

const Events = () => {

    const {events} = useTypedSelector(state => state.events)
    const {getEvents} = useAction()

    const options = [
        {value: eventsType.all, label: "all themes"},
        {value: eventsType.lecture, label: "Online lecture"},
        {value: eventsType.masterClass, label: "Online master-class"},
        {value: eventsType.workshop, label: "Online workshop"},
    ]
    const options2 = [
        {value: "newest", label: "newest"},
        {value: "outdated", label: "outdated"}
    ]
    const options3 = [
        {value: 3, label: "3"},
        {value: 4, label: "4"},
        {value: 5, label: "5"},
        {value: 6, label: "6"},
        {value: 7, label: "7"},
        {value: 8, label: "8"},
        {value: 9, label: "9"},
    ]

    const [category, setCategory] = useState({value: eventsType.all, label: "all themes"})
    const [sortBy, setSortBy] = useState("newest")
    const [show, setShow] = useState(9)

    const onChangeCategory = (newValue: any) => {
        setCategory(newValue)

    }
    const onChangeSortBy = (newValue: any) => {
        setSortBy(newValue)
    }
    const onChangeShow = (newValue: any) => {
        setShow(newValue)
    }


    useEffect(() => {
        getEvents()
        // eslint-disable-next-line
    }, [])


    const filterEvents = category.value === eventsType.all ? events : events.filter((event) => event.type === category.value)
    
    return (
        <div className={style.wrapper}>
            <article>
                <p>our events</p>
                <h2>Lectures, workshops & master-classes</h2>
            </article>
            <div className={style.controls}>
                <div className={style.control}>
                    <p>Event category</p>
                    <CustomSelect options={options} value={category} onChange={onChangeCategory} defaultValue={"all"}
                                  placeholder={"all themes"}/>
                </div>
                <div className={style.control}>
                    <p>Sort by</p>
                    <CustomSelect options={options2} value={sortBy} onChange={onChangeSortBy} defaultValue={"all"}
                                  placeholder={"newest"}/>
                </div>
                <div className={style.control}>
                    <p>Show</p>
                    <CustomSelect options={options3} value={show} onChange={onChangeShow} defaultValue={"all"}
                                  placeholder={"9"}/>
                </div>
            </div>
            <div className={style.content}>
                {
                    filterEvents.map((event) => {
                        return (
                            <div key={event.id}>{event.id}{event.type}{event.title}</div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Events;