import {combineReducers} from "redux";
import coursesReducer from "./coursesReducer";
import eventsReducer from "./eventsReducer";
import {reducer as formReducer} from 'redux-form'

export const rootReducer = combineReducers({
    courses: coursesReducer,
    events: eventsReducer,
    form: formReducer
})


export type RootState = ReturnType<typeof rootReducer>