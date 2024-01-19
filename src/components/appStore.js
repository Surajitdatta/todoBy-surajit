import {configureStore} from "@reduxjs/toolkit"
import todoReducer from "./Todoslice"
export const appStore= configureStore({
    reducer:{
        todo:todoReducer
    }
})