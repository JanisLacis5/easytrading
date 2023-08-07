import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import customFetch from "../utils"

const initialState = {
    isLogged: localStorage.getItem("userId") ? true : false,
    isLoading: false,
    user: {
        id:
            typeof localStorage.getItem("userId") !== "undefined"
                ? JSON.parse(localStorage.getItem("userId"))
                : "",
        trades: JSON.parse(localStorage.getItem("userTrades")),
        info:
            typeof localStorage.getItem("userInfo") !== "undefined"
                ? JSON.parse(localStorage.getItem("userInfo"))
                : "",
        notes: JSON.parse(localStorage.getItem("userNotes")),
    },
}

export const clearTrades = createAsyncThunk("user/clearTrades", async () => {
    const id = localStorage.getItem("userId")
    try {
        const {data} = await customFetch.delete(
            `/deleteTrades/${JSON.parse(id)}`,
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
    reducers: {
        setIsLoading: (state) => {
            state.isLoading = true
        },
        setIsNotLoading: (state) => {
            state.isLoading = false
        },
        login: (state, {payload}) => {
            const trades = payload.trades || []
            const notes = payload.notes || []
            localStorage.setItem("userId", JSON.stringify(payload.id))
            localStorage.setItem("userTrades", JSON.stringify(trades))
            localStorage.setItem("userInfo", JSON.stringify(payload.info))
            localStorage.setItem("userNotes", JSON.stringify(notes))

            let reverseTrades = [...trades]
            if (payload.trades && payload.trades.length) {
                reverseTrades = reverseTrades.reverse()
            }
            if (!payload.trades) {
                reverseTrades = []
            }

            return {
                ...state,
                isLogged: true,
                isLoading: false,
                user: {
                    ...state.user,
                    id: payload.id,
                    trades: reverseTrades,
                    info: payload.info,
                    notes: notes,
                },
            }
        },
        logout: (state) => {
            localStorage.clear()
            return {...state, isLoading: false, isLogged: false, user: {}}
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(clearTrades.pending, (state) => {
                state.isLoading = true
            })
            .addCase(clearTrades.fulfilled, (state, {payload}) => {
                localStorage.setItem("userTrades", [])
                state.user.trades = []
            })
            .addCase(clearTrades.rejected, (state) => {
                state.isLoading = false
            })
    },
})

export const {login, logout, setIsLoading, setIsNotLoading} = userSlice.actions
export default userSlice.reducer
