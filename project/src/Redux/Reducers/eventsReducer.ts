import {EventsAction, EventsActionType, EventsState} from "../Other/Types/eventsTypes";
import {eventsType} from "../Other/data";

const initialState: EventsState = {
    events: [],
    eventCategory: eventsType.all
}

const eventsReducer = (state = initialState, action: EventsAction): EventsState => {
    switch (action.type) {
        case EventsActionType.GET_START_EVENTS:
            return {
                events: action.payload,
                eventCategory: state.eventCategory
            }
        case EventsActionType.GET_EVENTS:
            return {
                events: action.payload,
                eventCategory: state.eventCategory
            }
        case EventsActionType.FILTER_BY_CATEGORY:
            debugger

            return {
                events: action.payload === eventsType.all ? state.events : state.events.filter((event) => event.type === action.payload),
                eventCategory: action.payload
            }
        default :
            return state
    }
}

export default eventsReducer
