import { configureStore, createSlice } from "@reduxjs/toolkit";

let storedPastes = [];

try {
    const raw = localStorage.getItem('pastes');
    storedPastes = raw ? JSON.parse(raw) : []
} catch (error) {
    console.log('invalid JSONS');
    localStorage.removeItem('pastes');
    storedPastes = [];
}

const initialState = {
    pastes: storedPastes
}

export const pasteSlice = createSlice({
    name: 'Paste',
    initialState,
    reducers : {
   addToPaste: (state, action) => {
    const paste = action.payload;
    state.pastes.push(paste);
    localStorage.setItem('pastes', JSON.stringify(state.pastes))
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