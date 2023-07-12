import {instance} from "./axiosConfig";

interface IResponseEventAPI {
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
    eventTypeID: string,
    curatorId: string,
    eventType: {
        name: string
    },
    theme: {
        id: number,
        title: string,
        description: string,
        eventId: number
    }[]
}

export interface IEventCategory {
    id: number,
    name: string
}

export const eventAPI = {
    async getStartEvent() {
        try {
            const response = await instance.get<IResponseEventAPI>("event?page=1&limit=3")
            return response.data.rows
        } catch (e) {
            alert(e)
        }
    },

    async getEventCategory() {
        try {
            const response = await instance.get<IEventCategory[]>("eventType")
            return response.data
        } catch (e) {
            alert(e)
        }
    },

    async getEvents(limit: number, eventTypeId: number, page: number, text: string) {
        try {

            let requestText = text ? `&text=${text}` : ""

            const response = await instance.get<IResponseEventAPI>(`event?limit=${limit}&page=${page}&eventTypeId=${eventTypeId}${requestText}`)
            return response.data
        } catch (e) {
            alert(e)
        }
    },
    async getEventsById(eventId: number) {
        try {
            const response = await instance.get(`event/${eventId}`)
            return response.data
        } catch (e) {
            alert(e)
        }
    }
}