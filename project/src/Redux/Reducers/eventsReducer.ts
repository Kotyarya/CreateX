import {EventsAction, EventsActionType, EventsState} from "../Other/Types/eventsTypes";

const initialState: EventsState = {
    events: [],
    eventCategory: [],
    count: 0,
    activeEvent: null
}

const eventsReducer = (state = initialState, action: EventsAction): EventsState => {
    switch (action.type) {
        case EventsActionType.GET_START_EVENTS:
            return {
                events: action.payload,
                eventCategory: state.eventCategory,
                count: state.count,
                activeEvent: state.activeEvent
            }
        case EventsActionType.GET_EVENTS_CATEGORY:
            return {
                ...state,
                eventCategory: action.payload
            }
        case EventsActionType.GET_EVENTS:
            return {
                events: action.payload,
                eventCategory: state.eventCategory,
                count: state.count,
                activeEvent: state.activeEvent
            }
        case EventsActionType.GET_COUNT:
            return {
                ...state,
                count: action.payload
            }
        case EventsActionType.GET_EVENT_BY_ID:
            return {
                ...state,
                activeEvent: action.payload
            }
        default :
            return state
    }
}

export default eventsReducer
