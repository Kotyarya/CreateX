import {IEvent} from "../../Redux/Other/Types/eventsTypes";

export interface EventCardTypes {
    event: IEvent,
    isGridType?: boolean,
    searchText?: string
}