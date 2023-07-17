import {createSlice} from "@reduxjs/toolkit"
import customFetch from "../utils"
import {useEffect} from "react"

const initialState = {
    isLogged: false,
    user: {},
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, {payload}) => {
            return {...state, isLogged: true, user: {...payload}}
        },
        logout: (state) => {
            return {...state, isLogged: false, user: {}}
        },
    },
})

export const {login, logout} = userSlice.actions
export default userSlice.reducer
