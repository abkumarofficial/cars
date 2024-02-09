import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
    name: 'form',
    initialState: {
        name: '',
        cost: 0,
    },
    reducers: {
        changeName(state, action) {
            state.name = action.payload;
        },
        changeCost(state, action) {
            state.cost = action.payload;
        }
    }
});

// formSlice.actions gices us the action created by the mini reducers that we have written
export const { changeName, changeCost } = formSlice.actions;
// Super Reducer
export const formReducer = formSlice.reducer;