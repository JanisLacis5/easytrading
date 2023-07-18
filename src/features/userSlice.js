import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    isLogged: localStorage.getItem("user") ? true : false,
    user: {},
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, {payload}) => {
            localStorage.setItem("user", JSON.stringify(payload))
            return {...state, isLogged: true, user: {...payload}}
        },
        logout: (state) => {
            localStorage.clear()
            return {...state, isLogged: false, user: {}}
        },
    },
})

export const {login, logout} = userSlice.actions
export default userSlice.reducer
