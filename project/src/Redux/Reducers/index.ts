import {combineReducers} from "redux";
import coursesReducer from "./coursesReducer";
import eventsReducer from "./eventsReducer";
import {reducer as formReducer} from 'redux-form'
import curatorsReducer from "./curatorsReducer";
import branchReducer from "./branchReducer";

export const rootReducer = combineReducers({
    courses: coursesReducer,
    events: eventsReducer,
    curators: curatorsReducer,
    branches: branchReducer,
    form: formReducer
})


export type RootState = ReturnType<typeof rootReducer>