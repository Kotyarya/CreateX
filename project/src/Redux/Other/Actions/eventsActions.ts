import {Dispatch} from "redux";
import {EventsAction, EventsActionType} from "../Types/eventsTypes";
import {eventAPI} from "../../API/eventAPI";


// const month: { [key: string]: number } = {
//     "January": 0,
//     "February": 1,
//     "March": 2,
//     "April": 3,
//     "May": 4,
//     "June": 5,
//     "July": 6,
//     "August": 7,
//     "September": 8,
//     "October": 9,
//     "November": 10,
//     "December": 11
// }
//
// const date = new Date()
// const actualMonth = date.getMonth()
// const actualDay = date.getDate()
//
// const responseSortByMonth = events.sort((a, b) => month[a.month] - month[b.month])
//
// const responseSortByActualMonth = responseSortByMonth.sort((a, b) => {
//     if (month[a.month] < actualMonth) {
//         return 1
//     } else if (month[b.month] < actualMonth) return -1
//     else return 0
// })
//
// const responseSortByDay = responseSortByActualMonth.sort((a, b) => {
//     if (a.month === b.month) {
//         if (a.day > b.day) {
//             return 1
//         } else if (a.day < b.day) {
//             return -1
//         } else return 0
//
//     } else return 0
// })
//
// const responseSorted = responseSortByDay.filter((event) => {
//     return !(month[event.month] === actualMonth && event.day <= actualDay);
// })


export const getStartEvents = () => {
    return async (dispatch: Dispatch<EventsAction>) => {
        const response = await eventAPI.getStartEvent()
        dispatch({type: EventsActionType.GET_START_EVENTS, payload: response})
    }
}

export const getEventsCategory = () => {
    return async (dispatch: Dispatch<EventsAction>) => {
        const response = await eventAPI.getEventCategory()
        dispatch({type: EventsActionType.GET_EVENTS_CATEGORY, payload: response})
    }
}

export const getEvents = (limit: number, eventTypeId: number, page: number, text: string) => {
    return async (dispatch: Dispatch<EventsAction>) => {
        const response = await eventAPI.getEvents(limit, eventTypeId, page, text)
        dispatch({type: EventsActionType.GET_EVENTS, payload: response ? response.rows : []})
        dispatch({type: EventsActionType.GET_COUNT, payload: response ? response.count : 0})
    }
}

// export const getEvents = () => {
//     return async (dispatch: Dispatch<EventsAction>) => {
//         setTimeout(() => {
//             dispatch({type: EventsActionType.GET_EVENTS, payload: responseSorted})
//         }, 100)
//     }
// }

// export const filterByCategory = (eventsCategory: eventsType) => {
//     return async (dispatch: Dispatch<EventsAction>) => {
//         dispatch({type: EventsActionType.FILTER_BY_CATEGORY, payload: eventsCategory})
//     }
// }
