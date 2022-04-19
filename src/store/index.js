import {combineReducers, createStore} from "redux";
import {movies} from "./reducers/movies";
import {todos} from "./reducers/todos";

export const store = createStore(combineReducers({
    movies,
    todos,
}))
