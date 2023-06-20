import {IEvents} from "../data";

export enum EventsActionType {
    GET_START_EVENTS = "GET_START_EVENTS",
}

interface GetStartEventsAction {
    type: EventsActionType.GET_START_EVENTS,
    payload: IEvents[]
}

export type EventsAction = GetStartEventsAction

export interface EventsState {
    events: IEvents[],
}
