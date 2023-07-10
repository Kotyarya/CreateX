import React, {ChangeEvent, useEffect, useState} from 'react';
import Events from "./Events";
import {useTypedSelector} from "../../hook/useTypedSelector";
import {useAction} from "../../hook/useAction";
import {useNavigate} from "react-router-dom";

const EventsContainer = () => {

    const {eventCategory, events, count} = useTypedSelector(state => state.events)
    const {getEventsCategory, getEvents} = useAction()
    const navigate = useNavigate()

    const optionsSortBy = [
        {value: "newest", label: "newest"},
        {value: "outdated", label: "outdated"}
    ]
    const optionsLimit = [
        {value: 3, label: "3"},
        {value: 4, label: "4"},
        {value: 5, label: "5"},
        {value: 6, label: "6"},
        {value: 7, label: "7"},
        {value: 8, label: "8"},
        {value: 9, label: "9"},
    ]
    const optionsEventCategory = eventCategory?.map((category) => {
        return {
            value: category.id,
            label: category.name
        }
    })
    optionsEventCategory?.push({label: "all themes", value: 0})


    const [category, setCategory] = useState({value: 0, label: "all themes"})
    const [sortBy, setSortBy] = useState("newest")
    const [show, setShow] = useState({value: 9, label: "9"})
    const [currentPage, setPage] = useState<number>(1)
    const [searchText, setSearchText] = useState<string>("")
    const [isGridType, setIsGridType] = useState<boolean>(false)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value)
        setPage(1)
    }
    const onChangeCategory = (newValue: any) => {
        setPage(1)
        setCategory(newValue)

    }
    const onChangeSortBy = (newValue: any) => {
        setPage(1)
        setSortBy(newValue)
    }
    const onChangeShow = (newValue: any) => {
        setPage(1)
        setShow(newValue)
    }
    const onChangeTypeBlocks = (isGridType: boolean) => {
        setIsGridType(isGridType)
    }
    const onChangePage = (number: number) => {
        setPage(currentPage + number)
    }
    const onSetPage = (page: number) => {
        setPage(page)
    }


    useEffect(() => {
        getEventsCategory()
        getEvents(show.value, category.value, currentPage, searchText.trim())
        // eslint-disable-next-line
    }, [show.value, category, sortBy, currentPage, searchText])


    const pages = []
    for (let i = 1; i <= Math.ceil(count / show.value); i++) {
        pages.push(i)
    }

    const navigateToEvent = (eventId: number) => {
        navigate(`event/${eventId}`)
    }


    return <Events events={events}
                   navigateToEvent={navigateToEvent}
                   currentPage={currentPage}
                   onChangePage={onChangePage}
                   onSetPage={onSetPage}
                   pages={pages}
                   searchText={searchText}
                   show={show}
                   sortBy={sortBy}
                   onChangeHandler={onChangeHandler}
                   onChangeCategory={onChangeCategory}
                   category={category}
                   onChangeShow={onChangeShow}
                   onChangeSortBy={onChangeSortBy}
                   onChangeTypeBlocks={onChangeTypeBlocks}
                   optionsEventCategory={optionsEventCategory}
                   optionsLimit={optionsLimit}
                   optionsSortBy={optionsSortBy}
                   isGridType={isGridType}
    />
};

export default EventsContainer;