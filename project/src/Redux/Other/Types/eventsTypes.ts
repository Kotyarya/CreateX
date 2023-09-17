export interface IEventResponse {
    count: number,
    rows: IEvent[]
}

export interface IEvent {
    id: number,
    title: string,
    month: string,
    day: string,
    time: string,
    date: string,
    eventTypeID: number,
    curatorId: number,
    eventType: {
        name: string
    },
    theme: {
        id: number,
        title: string,
        description: string,
        eventId: number
    }[],
    forWhom: { text: string }[]
}

export interface IEventCategory {
    id: number,
    name: string
}


export enum EventsActionType {
    GET_START_EVENTS = "GET_START_EVENTS",
    GET_EVENTS = "GET_EVENTS",
    GET_EVENTS_CATEGORY = "GET_EVENTS_CATEGORY",
    GET_COUNT = "GET_COUNT",
    GET_EVENT_BY_ID = "GET_EVENT_BY_ID",
    FETCHING_EVENTS = "FETCHING_EVENTS"
}

interface GetStartEventsAction {
    type: EventsActionType.GET_START_EVENTS,
    payload: IEvent[] | undefined
}

interface FetchingEvents {
    type: EventsActionType.FETCHING_EVENTS,
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

interface GetEventById {
    type: EventsActionType.GET_EVENT_BY_ID,
    payload: IEvent | null
}

export type EventsAction =
    GetStartEventsAction
    | GetEvents
    | GetEventsCategory
    | GetCount
    | GetEventById
    | FetchingEvents

export interface EventsState {
    events: IEvent[] | undefined,
    eventCategory: IEventCategory[] | undefined,
    count: number,
    activeEvent: IEvent | null,
    loading: boolean
}
