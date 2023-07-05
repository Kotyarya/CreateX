import * as courseActions from "./coursesActions"
import * as eventsActions from "./eventsActions"
import * as curatorsActions from "./curatorsAction"

export const rootActions = {
    ...courseActions,
    ...eventsActions,
    ...curatorsActions
}