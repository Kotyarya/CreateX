import {instance} from "../axiosConfig";
import {IEventCategory, IEventResponse} from "../../Other/Types/eventsTypes";


export enum SortBy {
    ASC = "ASC",
    DESC = "DESC"
}

export const eventAPI = {
    async getStartEvent() {
        try {
            const response = await instance.get<IEventResponse>("event?page=1&limit=3")
            return response.data.rows
        } catch (e) {
            return undefined
        }
    },

    async getEventCategory() {
        try {
            const response = await instance.get<IEventCategory[]>("eventType")
            return response.data
        } catch (e) {
            return undefined
        }
    },

    async getEvents(limit: number, eventTypeId: number, page: number, text: string, sortBy: SortBy) {
        try {
            let requestText = text ? `&text=${text}` : ""
            const response = await instance.get<IEventResponse>(`event?limit=${limit}&page=${page}&eventTypeId=${eventTypeId}${requestText}&sortBy=${sortBy}`)
            console.log(`event?limit=${limit}&page=${page}&eventTypeId=${eventTypeId}${requestText}&sortBy=${sortBy}`)
            return response.data
        } catch (e) {
            return undefined
        }
    },
    async getEventsById(eventId: number) {
        try {
            const response = await instance.get(`event/${eventId}`)
            return response.data
        } catch (e) {
            return undefined
        }
    }
}