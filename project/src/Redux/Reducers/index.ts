import {combineReducers} from "redux";
import coursesReducer from "./coursesReducer";
import eventsReducer from "./eventsReducer";

export const rootReducer = combineReducers({
    courses: coursesReducer,
    events: eventsReducer
})


export type RootState = ReturnType<typeof rootReducer>