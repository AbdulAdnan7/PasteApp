import { configureStore, createSlice } from "@reduxjs/toolkit";
import toast from 'react-hot-toast';

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
    reducers: {
        addToPaste: (state, action) => {
            const paste = action.payload;
            state.pastes.push(paste);
            localStorage.setItem('pastes', JSON.stringify(state.pastes));
            toast('paste created Successfully')
        },
        updateToPaste: (state, action) => {
            const paste = action.payload;
            let index = state.pastes.findIndex((item) => item._id === paste._id);

            if (index >= 0) {
                state.pastes[index] = paste;

                localStorage.setItem('pastes', JSON.stringify(state.pastes))
            }
        },
        removeToPaste: (state, action) => {
            const pasteId = action.payload;

            console.log(pasteId);
            const index = state.pastes.findIndex((item) => item._id === pasteId);

      if(index >= 0) {
        state.pastes.splice(index, 1);

        localStorage.setItem('pastes', JSON.stringify(state.pastes));

        toast.success('paste Deleted')
      }

        },
        resetAllPaste: (state, action) => {
            state.pastes = [];
            localStorage.removeItem('pastes')
        }
    }
})

export const { addToPaste, removeToPaste, updateToPaste, resetAllPaste } = pasteSlice.actions;
export default pasteSlice.reducer;