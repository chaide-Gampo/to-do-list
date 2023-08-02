import { Store } from "redux";
import { createStore } from "redux";
import rootReducer from '../reducer'
import initialData from "../initialData";

const data = {
    tasks: initialData
}

export default function configureStore(initialSate = initialData){
    return Store (
        rootReducer,
        initialSate,
        window.REDUX_DEVTOOLS_EXTENSION__&& window.REDUX_DEVTOOLS_EXTENSION__()
    )
}