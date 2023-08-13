import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    showSmallLinks: false,
}

const smallSlice = createSlice({
    name: "small",
    initialState,
    reducers: {
        reset: (state) => {
            state.showSmallLinks = false
        },
        toggleSmallLinks: (state) => {
            state.showSmallLinks = !state.showSmallLinks
        },
    },
})

export const {toggleSmallLinks, reset} = smallSlice.actions
export default smallSlice.reducer
