import { createSlice } from "@reduxjs/toolkit";
 
const initialState = {
    backet: 0
}
const backetSlice = createSlice({
    name: "backet",
    initialState,
    reducers: {
        setState(state, action) {
            state.backet = action.payload
        }
    }
})

export const {setState} = backetSlice.actions

export default backetSlice.reducer  