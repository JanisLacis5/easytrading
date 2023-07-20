import {createSlice} from "@reduxjs/toolkit"

// true = (A-Z)
// false = (Z-A)

const initialState = {
    option: "time",
    value: true,
}

const sortSlice = createSlice({
    name: "sort",
    initialState,
    reducers: {
        updateSort: (state, {payload}) => {
            if (payload.name === state.option) {
                state.value = !state.value
            } else {
                state.value = true
                state.option = payload.name
            }
        },
        sortTrades: (state, {payload}) => {
            let ansArr = payload.trades
            console.log(ansArr)
            // ansArr = ansArr.sort((a, b) => a[payload.name] - b[payload.name])
            // return ansArr
        },
    },
})

export const {updateSort, sortTrades} = sortSlice.actions
export default sortSlice.reducer
