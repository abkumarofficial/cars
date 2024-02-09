import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name: "cars",
    initialState: {
        searchTerm: '',
        cars: [],
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        addCar(state, action) {
            // Assuming that we will get a object in the payload
            // action.payload === { name: 'ab', cost: '140' }
            state.cars.push({
                id: nanoid(),
                name: action.payload.name,
                cost: action.payload.cost,
            });
        },
        removeCar(state, action) {
            const updated = state.cars.filter(car => car.id !== action.payload);
            // return  {
            //     ...state,
            //     cars: newArr,
            // }
            // OR
            state.cars = updated;
        },
    }
});


export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
// Super Reducer
export const carsReducer = carsSlice.reducer;