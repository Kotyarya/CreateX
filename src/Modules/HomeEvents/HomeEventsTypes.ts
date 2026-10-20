import {IEvent} from "../../Redux/Other/Types/eventsTypes";

export interface HomeEventsTypes {
    events: IEvent[] | undefined,
    loading: boolean
}