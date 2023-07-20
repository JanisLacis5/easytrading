import {createSlice} from "@reduxjs/toolkit"
import dayjs from "dayjs"

const initialState = {
    filters: {
        stock: "",
        action: "default",
        date: "",
        PL: "",
    },
    filteredProducts: [],
}

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setFilteredProducts: (state, {payload}) => {
            state.filteredProducts = payload.trades
        },
        updateFilters: (state, {payload}) => {
            const {name, value} = payload
            state.filters[name] = value
        },
        filterProducts: (state, {payload}) => {
            const {stock, action, date, PL} = state.filters
            const {trades} = payload
            let ansArr = [...trades]

            if (stock) {
                ansArr = ansArr.filter((trade) =>
                    trade.stock.startsWith(stock.toUpperCase())
                )
            }
            // if (action !== "default") {
            //     ansArr = trades.filter((trade)=>trade.action === action)
            // }
            if (date) {
                ansArr = ansArr.filter((trade) => trade.date === date)
            }
            if (PL === "positive") {
                ansArr = ansArr.filter((trade) => trade.pl > 0)
            }
            if (PL === "negative") {
                ansArr = ansArr.filter((trade) => trade.pl < 0)
            }

            state.filteredProducts = ansArr
        },
        clearFilters: (state, {payload}) => {
            const {trades} = payload
            state.filters.stock = ""
            state.filters.action = "default"
            state.filters.date = ""
            state.filters.PL = ""
            state.filteredProducts = trades
        },
    },
})

export const {
    updateFilters,
    filterProducts,
    setFilteredProducts,
    clearFilters,
} = filterSlice.actions
export default filterSlice.reducer
