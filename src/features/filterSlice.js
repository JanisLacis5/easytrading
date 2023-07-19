import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    filters: {
        stock: "",
        action: "",
        date: "",
        PL: "",
    },
}

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        updateFilters: (state, {payload}) => {
            const {name, value} = payload
            state.filters[name] = value
        },
    },
})

export const {updateFilters} = filterSlice.actions
export default filterSlice.reducer
