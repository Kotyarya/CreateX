import {EventsAction, EventsActionType, EventsState} from "../Other/Types/eventsTypes";

const initialState: EventsState = {
    events: [],
}

const eventsReducer = (state = initialState, action: EventsAction) => {
    switch (action.type) {
        case EventsActionType.GET_START_EVENTS:
            return {
                events: action.payload
            }
        default :
            return state
    }
}

export default eventsReducer
