import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./features/userSlice"
import asideReducer from "./features/asideSlice"
import filterReducer from "./features/filterSlice"
import sortReducer from "./features/sortSlice"

export const store = configureStore({
    reducer: {
        user: userReducer,
        aside: asideReducer,
        filter: filterReducer,
        sort: sortReducer,
    },
})
