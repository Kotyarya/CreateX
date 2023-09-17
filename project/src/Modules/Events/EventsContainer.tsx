import React, {ChangeEvent, useEffect, useState} from 'react';
import Events from "./Events";
import {useTypedSelector} from "../../hook/useTypedSelector";
import {useAction} from "../../hook/useAction";
import {SortBy} from "../../Redux/API/event/eventAPI";
import {OptionsType} from "../../Components/Select/SelectTypes";

const EventsContainer = () => {

    const {eventCategory, events, count} = useTypedSelector(state => state.events)
    const {getEventsCategory, getEvents} = useAction()

    const optionsSortBy = [
        {value: SortBy.ASC, label: "newest"},
        {value: SortBy.DESC, label: "outdated"}
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
    const allThemesCategory = {label: "all themes", value: 0}
    optionsEventCategory?.push(allThemesCategory)


    const [category, setCategory] = useState<OptionsType<number>>(allThemesCategory)
    const [sortBy, setSortBy] = useState<OptionsType<SortBy>>({value: SortBy.ASC, label: "newest"})
    const [show, setShow] = useState<OptionsType<number>>({value: 9, label: "9"})
    const [currentPage, setPage] = useState<number>(1)
    const [searchText, setSearchText] = useState<string>("")
    const [isGridType, setIsGridType] = useState<boolean>(false)


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value)
        setPage(1)
    }
    const onChangeCategory = (newValue: OptionsType<number>) => {
        setPage(1)
        setCategory(newValue)
    }
    const onChangeSortBy = (newValue: OptionsType<SortBy>) => {
        setPage(1)
        setSortBy(newValue)
    }
    const onChangeShow = (newValue: OptionsType<number>) => {
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
        getEvents(show.value, category.value, currentPage, searchText.trim(), sortBy.value)
        // eslint-disable-next-line
    }, [show.value, category, sortBy, currentPage, searchText, sortBy])


    const pages = []
    for (let i = 1; i <= Math.ceil(count / show.value); i++) {
        pages.push(i)
    }

    const props = {
        events,
        currentPage,
        onChangePage,
        onSetPage,
        pages,
        searchText,
        show,
        sortBy,
        onChangeHandler,
        onChangeCategory,
        category,
        onChangeShow,
        onChangeSortBy,
        onChangeTypeBlocks,
        optionsEventCategory,
        optionsLimit,
        optionsSortBy,
        isGridType
    }

    return <Events {...props}/>
};

export default EventsContainer;