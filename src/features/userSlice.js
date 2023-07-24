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
            let reverseTrades = payload.trades
            return {
                ...state,
                isLogged: true,
                user: {id: payload.id, trades: reverseTrades.reverse()},
            }
        },
        logout: (state) => {
            localStorage.clear()
            return {...state, isLogged: false, user: {}}
        },
    },
})

export const {login, logout} = userSlice.actions
export default userSlice.reducer
