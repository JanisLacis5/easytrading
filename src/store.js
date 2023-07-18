import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./features/userSlice"
import asideReducer from "./features/asideSlice"

export const store = configureStore({
    reducer: {
        user: userReducer,
        aside: asideReducer,
    },
})
