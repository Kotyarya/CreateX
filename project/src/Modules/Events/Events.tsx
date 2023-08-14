import React, {ChangeEvent, FC} from 'react';
import style from "./Events.module.scss"
import CustomSelect from "../../Components/Select/CustomSelect";
import {nanoid} from "nanoid";
import ControlButton, {ControlButtonRotation} from "../../Components/ControlButton/ControlButton";
import SearchInput from "../../Components/Input/SearchInput/SearchInput";
import {ReactComponent as FlexSVG} from "../../assets/icons/other/flex.svg";
import {ReactComponent as GridSVG} from "../../assets/icons/other/grid.svg";
import EventCard from "../../Components/EventCard/EventCard";
import {IEvent} from "../../Redux/Other/Types/eventsTypes";


interface EventsProps {
    isGridType: boolean,
    optionsEventCategory: { value: number, label: string }[] | undefined,
    category: { value: number, label: string },
    onChangeCategory: (newValue: any) => void
    onChangeSortBy: (newValue: any) => void
    onChangeShow: (newValue: any) => void,
    optionsSortBy: { value: string, label: string }[],
    sortBy: string,
    optionsLimit: { value: number, label: string }[],
    show: { value: number, label: string },
    onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void,
    searchText: string,
    events: IEvent[] | undefined,
    currentPage: number,
    pages: number[],
    onChangeTypeBlocks: (isGridType: boolean) => void,
    onSetPage: (page: number) => void,
    onChangePage: (number: number) => void,
}


const Events: FC<EventsProps> = ({
                                     isGridType,
                                     optionsEventCategory,
                                     category,
                                     onChangeCategory,
                                     optionsSortBy,
                                     sortBy,
                                     onChangeSortBy,
                                     optionsLimit,
                                     show,
                                     onChangeShow,
                                     onChangeHandler,
                                     searchText,
                                     onChangeTypeBlocks,
                                     events,
                                     currentPage,
                                     onSetPage,
                                     onChangePage,
                                     pages
                                 }) => {

    return (
        <div className={style.wrapper}>
            <article>
                <p>our events</p>
                <h2>Lectures, workshops & master-classes</h2>
            </article>
            <div className={style.controls}>
                <div className={style.control}>
                    <p>Event category</p>
                    <CustomSelect options={optionsEventCategory} value={category} onChange={onChangeCategory}
                                  defaultValue={"all"}
                                  placeholder={"all themes"}/>
                </div>
                <div className={style.control}>
                    <p>Sort by</p>
                    <CustomSelect options={optionsSortBy} value={sortBy} onChange={onChangeSortBy} defaultValue={"all"}
                                  placeholder={"newest"}/>
                </div>
                <div className={style.control}>
                    <p>Show</p>
                    <CustomSelect options={optionsLimit} value={show} onChange={onChangeShow}
                                  placeholder={"9"}/>
                </div>
                <div>
                    <SearchInput width={28.2} placeholder={"Search event..."} onChange={onChangeHandler}
                                 value={searchText}/>
                </div>
                <div className={style.blocksType}>
                    <FlexSVG className={!isGridType ? style.active : ""} onClick={() => onChangeTypeBlocks(false)}/>
                    <GridSVG className={isGridType ? style.active : ""} onClick={() => onChangeTypeBlocks(true)}/>
                </div>
            </div>
            <div className={style.content + " " + (isGridType ? style.gridContent : style.flexContent)}>
                {
                    events?.map((event) => {
                        return <EventCard key={event.id} event={event} isGridType={isGridType} searchText={searchText}/>
                    })
                }
            </div>
            <div className={style.page}>
                {
                    currentPage > 1 ?
                        <ControlButton onClick={() => onChangePage(-1)}
                                       rotation={ControlButtonRotation.left}
                                       disabled={false}/> : null
                }
                {
                    pages.map((page) => {
                        return <p className={page === currentPage ? style.activePage : style.pageNumber}
                                  onClick={() => onSetPage(page)}
                                  key={nanoid(10)}>{page}</p>
                    })
                }
                {
                    currentPage < pages.length ?
                        <ControlButton onClick={() => onChangePage(1)}
                                       rotation={ControlButtonRotation.right}
                                       disabled={false}/> : null
                }
            </div>
        </div>
    );
};

export default Events;