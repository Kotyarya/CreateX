import * as courseActions from "./coursesActions"
import * as eventsActions from "./eventsActions"
import * as curatorsActions from "./curatorsActions"
import * as branchesActions from "./branchesActions"
import * as blogsActions from "./blogsActions"

export const rootActions = {
    ...courseActions,
    ...eventsActions,
    ...curatorsActions,
    ...branchesActions,
    ...blogsActions
}