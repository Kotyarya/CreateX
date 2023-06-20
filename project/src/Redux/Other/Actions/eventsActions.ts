import {Dispatch} from "redux";
import {events} from "../data";
import {EventsAction, EventsActionType} from "../Types/eventsTypes";


const month: { [key: string]: number } = {
    "January": 0,
    "February": 1,
    "March": 2,
    "April": 3,
    "May": 4,
    "June": 5,
    "July": 6,
    "August": 7,
    "September": 8,
    "October": 9,
    "November": 10,
    "December": 11
}

const date = new Date()
const actualMonth = date.getMonth()
const actualDay = date.getDate()

export const getStartEvents = () => {
    return async (dispatch: Dispatch<EventsAction>) => {
        setTimeout(() => {

            const responseSortByMonth = events.sort((a, b) => month[a.month] - month[b.month])

            const responseSortByActualMonth = responseSortByMonth.sort((a, b) => {
                if (month[a.month] < actualMonth) {
                    return 1
                } else if (month[b.month] < actualMonth) return -1
                else return 0
            })

            const responseSortByDay = responseSortByActualMonth.sort((a, b) => {
                if (a.month === b.month) {
                    if (a.day > b.day) {
                        return 1
                    } else if (a.day < b.day) {
                        return -1
                    } else return 0

                } else return 0
            })

            const responseSortByActualDay = responseSortByDay.filter((event) => {
                return !(month[event.month] === actualMonth && event.day <= actualDay);
            })

            const response = responseSortByActualDay.filter((event, index) => index < 3)

            dispatch({type: EventsActionType.GET_START_EVENTS, payload: response})
        }, 100)
    }
}
