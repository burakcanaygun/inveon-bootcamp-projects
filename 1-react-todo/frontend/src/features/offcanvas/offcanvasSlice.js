import { createSlice } from "@reduxjs/toolkit";

// This slice is used to manage the state of the offcanvas menu.
const offcanvasSlice = createSlice({
    name: "offcanvas",
    initialState: {
        isOpen: false,
    },
    reducers: {
        toggleOffcanvas: (state) => {
            state.isOpen = !state.isOpen;
        },
    }
});
// Export the reducer.
export const { toggleOffcanvas } = offcanvasSlice.actions;
export default offcanvasSlice.reducer;