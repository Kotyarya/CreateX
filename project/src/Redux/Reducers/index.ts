import {combineReducers} from "redux";
import coursesReducer from "./coursesReducer";
import eventsReducer from "./eventsReducer";
import {reducer as formReducer} from 'redux-form'
import curatorsReducer from "./curatorsReducer";

export const rootReducer = combineReducers({
    courses: coursesReducer,
    events: eventsReducer,
    curators: curatorsReducer,
    form: formReducer
})


export type RootState = ReturnType<typeof rootReducer>