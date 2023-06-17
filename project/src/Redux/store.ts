import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./Reducers";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";


const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))

export const store = createStore(rootReducer, composedEnhancer)