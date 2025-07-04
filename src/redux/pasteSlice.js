import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
    paste: localStorage.getItem('pastes') ? JSON.parse(localStorage.getItem('pastes')) : []
}

export const pasteSlice = createSlice({
    name: 'Paste',
    initialState,
    reducers : {
   addToPaste: (state, action) => {

   },
   updateToPaste: (state, action) => {

   },
   removeToPaste: (state, action) => {

   },
   resetAllPaste: (state, action) => {

   }
    }
})

export const {addToPaste, removeToPaste, updateToPaste, resetAllPaste} = pasteSlice.actions;
export default pasteSlice.reducer;