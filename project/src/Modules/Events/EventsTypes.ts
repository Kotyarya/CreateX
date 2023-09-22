import {ChangeEvent} from "react";
import {IEvent} from "../../Redux/Other/Types/eventsTypes";
import {SortBy} from "../../Redux/API/event/eventAPI";
import {OptionsType} from "../../Components/Select/SelectTypes";

export interface EventsTypes {
    isGridType: boolean,
    optionsEventCategory: OptionsType<number>[] | undefined,
    category: OptionsType<number>,
    onChangeCategory: (newValue: OptionsType<number>) => void
    onChangeSortBy: (newValue: OptionsType<SortBy>) => void
    onChangeShow: (newValue: OptionsType<number>) => void,
    optionsSortBy: OptionsType<string>[],
    sortBy: OptionsType<SortBy>,
    optionsLimit: OptionsType<number>[],
    show: OptionsType<number>,
    onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void,
    searchText: string,
    events: IEvent[] | undefined,
    currentPage: number,
    pages: number[],
    onChangeTypeBlocks: (isGridType: boolean) => void,
    onSetPage: (page: number) => void,
    onChangePage: (number: number) => void,
    loading: boolean
}