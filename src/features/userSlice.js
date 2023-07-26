import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import customFetch from "../utils"

const initialState = {
    isLogged: localStorage.getItem("userId") ? true : false,
    isLoading: false,
    user: {
        id: "",
        trades: [],
    },
}

export const clearTrades = createAsyncThunk("user/clearTrades", async () => {
    const userCopy = localStorage.getItem("user")
    try {
        const {data} = await customFetch.delete(
            `/deleteTrades/${JSON.parse(userCopy).id}`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }
        )
        return data
    } catch (error) {
        console.log(error)
    }
})

const userSlice = createSlice({
    name: "user",
    initialState,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    reducers: {
        login: (state, {payload}) => {
            localStorage.setItem("userId", JSON.stringify(payload.id))
            localStorage.setItem("userTrades", JSON.stringify(payload.trades))
            let reverseTrades = payload.trades
            if (payload.trades && payload.trades.length) {
                reverseTrades = reverseTrades.reverse()
            }
            if (!payload.trades) {
                reverseTrades = []
            }

            return {
                ...state,
                isLogged: true,
                user: {
                    ...state.user,
                    id: payload.id,
                    trades: reverseTrades,
                },
            }
        },
        logout: (state) => {
            localStorage.clear()
            return {...state, isLogged: false, user: {}}
        },
        clearTrades: (state) => {
            localStorage.setItem("userTrades", [])
            state.user.trades = []
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(clearTrades.pending, (state) => {
                state.isLoading = true
            })
            .addCase(clearTrades.fulfilled, (state, {payload}) => {
                state.user.trades = []
            })
            .addCase(clearTrades.rejected, (state) => {
                state.isLoading = false
            })
    },
})

export const {login, logout} = userSlice.actions
export default userSlice.reducer
