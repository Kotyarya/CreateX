import {Dispatch} from "redux";
import {EventsAction, EventsActionType} from "../Types/eventsTypes";
import {eventAPI, SortBy} from "../../API/event/eventAPI";


export const getStartEvents = () => {
    return async (dispatch: Dispatch<EventsAction>) => {
        dispatch({type: EventsActionType.FETCHING_EVENTS})
        const response = await eventAPI.getStartEvent()
        dispatch({type: EventsActionType.GET_START_EVENTS, payload: response})
    }
}

export const getEventsCategory = () => {
    return async (dispatch: Dispatch<EventsAction>) => {
        dispatch({type: EventsActionType.FETCHING_EVENTS})
        const response = await eventAPI.getEventCategory()
        dispatch({type: EventsActionType.GET_EVENTS_CATEGORY, payload: response})
    }
}

export const getEvents = (limit: number, eventTypeId: number, page: number, text: string, sortBy: SortBy) => {
    return async (dispatch: Dispatch<EventsAction>) => {
        dispatch({type: EventsActionType.FETCHING_EVENTS})
        const response = await eventAPI.getEvents(limit, eventTypeId, page, text, sortBy)
        dispatch({type: EventsActionType.GET_EVENTS, payload: response ? response.rows : []})
        dispatch({type: EventsActionType.GET_COUNT, payload: response ? response.count : 0})
    }
}

export const getEventsById = (eventId: number) => {
    return async (dispatch: Dispatch<EventsAction>) => {
        dispatch({type: EventsActionType.FETCHING_EVENTS})
        const response = eventId === 0 ? null : await eventAPI.getEventsById(eventId)
        dispatch({type: EventsActionType.GET_EVENT_BY_ID, payload: response})
    }
}
