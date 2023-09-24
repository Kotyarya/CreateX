import {EventsAction, EventsActionType, EventsState} from "../Other/Types/eventsTypes";

const initialState: EventsState = {
    events: [],
    eventCategory: [],
    count: 0,
    activeEvent: null,
    loading: false,
    eventNotFound: false
}

const eventsReducer = (state = initialState, action: EventsAction): EventsState => {
    switch (action.type) {
        case EventsActionType.GET_START_EVENTS:
            return {
                ...state,
                events: action.payload,
                loading: false
            }
        case EventsActionType.GET_EVENTS_CATEGORY:
            return {
                ...state,
                eventCategory: action.payload,
                loading: false
            }
        case EventsActionType.GET_EVENTS:
            return {
                ...state,
                events: action.payload,
                loading: false
            }
        case EventsActionType.GET_COUNT:
            return {
                ...state,
                count: action.payload,
                loading: false
            }
        case EventsActionType.GET_EVENT_BY_ID:
            return {
                ...state,
                activeEvent: action.payload,
                loading: false,
                eventNotFound: false
            }
        case EventsActionType.FETCHING_EVENTS:
            return {
                ...state,
                loading: true
            }
        case EventsActionType.EVENT_NOT_FOUND:
            return {
                ...state,
                eventNotFound: true
            }
        default :
            return state
    }
}

export default eventsReducer
