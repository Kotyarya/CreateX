import {combineReducers} from "redux";
import coursesReducer from "./coursesReducer";
import eventsReducer from "./eventsReducer";
import curatorsReducer from "./curatorsReducer";
import branchReducer from "./branchReducer";
import blogReducer from "./blogsReducer";
import modalReducer from "./modalReducer";

export const rootReducer = combineReducers({
    courses: coursesReducer,
    events: eventsReducer,
    curators: curatorsReducer,
    branches: branchReducer,
    blogs: blogReducer,
    modal: modalReducer
})


export type RootState = ReturnType<typeof rootReducer>