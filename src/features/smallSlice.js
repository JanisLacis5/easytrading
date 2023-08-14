import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    showSmallLinks: false,
    showSmallAside: false,
}

const smallSlice = createSlice({
    name: "small",
    initialState,
    reducers: {
        resetLinks: (state) => {
            state.showSmallLinks = false
        },
        resetAside: (state) => {
            state.showSmallAside = false
        },
        toggleSmallLinks: (state) => {
            state.showSmallLinks = !state.showSmallLinks
        },
        toggleSmallAside: (state) => {
            state.showSmallAside = !state.showSmallAside
        },
    },
})

export const {toggleSmallLinks, resetLinks, resetAside, toggleSmallAside} =
    smallSlice.actions
export default smallSlice.reducer
