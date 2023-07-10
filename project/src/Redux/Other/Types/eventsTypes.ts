import {IEvent, IEventCategory} from "../../API/eventAPI";

export enum EventsActionType {
    GET_START_EVENTS = "GET_START_EVENTS",
    GET_EVENTS = "GET_EVENTS",
    GET_EVENTS_CATEGORY = "GET_EVENTS_CATEGORY",
    GET_COUNT = "GET_COUNT"
}

interface GetStartEventsAction {
    type: EventsActionType.GET_START_EVENTS,
    payload: IEvent[] | undefined
}

interface GetEvents {
    type: EventsActionType.GET_EVENTS,
    payload: IEvent[] | undefined
}

interface GetEventsCategory {
    type: EventsActionType.GET_EVENTS_CATEGORY,
    payload: IEventCategory[] | undefined
}

interface GetCount {
    type: EventsActionType.GET_COUNT,
    payload: number
}

export type EventsAction = GetStartEventsAction | GetEvents | GetEventsCategory | GetCount

export interface EventsState {
    events: IEvent[] | undefined,
    eventCategory: IEventCategory[] | undefined,
    count: number
}
