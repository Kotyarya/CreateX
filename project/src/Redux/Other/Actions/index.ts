import * as courseActions from "./coursesActions"
import * as eventsActions from "./eventsActions"

export const rootActions = {
    ...courseActions,
    ...eventsActions
}