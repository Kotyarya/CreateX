import {combineReducers} from "redux";
import coursesReducer from "./coursesReducer";
import eventsReducer from "./eventsReducer";
import {reducer as formReducer} from 'redux-form'
import curatorsReducer from "./curatorsReducer";
import branchReducer from "./branchReducer";
import blogReducer from "./blogsReducer";

export const rootReducer = combineReducers({
    courses: coursesReducer,
    events: eventsReducer,
    curators: curatorsReducer,
    branches: branchReducer,
    blogs: blogReducer,
    form: formReducer
})


export type RootState = ReturnType<typeof rootReducer>