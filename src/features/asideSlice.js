import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    tradingButton: false,
}

const asideSlice = createSlice({
    name: "aside",
    initialState,
    reducers: {
        toggleTrading: (state) => {
            state.tradingButton = !state.tradingButton
        },
    },
})

export const {toggleTrading} = asideSlice.actions
export default asideSlice.reducer
