import {eventsType, IEvents} from "../data";

export enum EventsActionType {
    GET_START_EVENTS = "GET_START_EVENTS",
    GET_EVENTS = "GET_EVENTS",
    FILTER_BY_CATEGORY = "FILTER_BY_CATEGORY"
}

interface GetStartEventsAction {
    type: EventsActionType.GET_START_EVENTS,
    payload: IEvents[]
}

interface GetEvents {
    type: EventsActionType.GET_EVENTS,
    payload: IEvents[]
}

interface FilterByCategory {
    type: EventsActionType.FILTER_BY_CATEGORY,
    payload: eventsType
}

export type EventsAction = GetStartEventsAction | GetEvents | FilterByCategory

export interface EventsState {
    events: IEvents[],
    eventCategory: eventsType
}
