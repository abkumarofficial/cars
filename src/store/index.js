import { configureStore } from "@reduxjs/toolkit";
import {
    changeSearchTerm,
    addCar,
    removeCar,
    carsReducer
} from "./slices/carsSlice";
import {
    formReducer,
    changeName,
    changeCost
} from "./slices/formSlice";

const store = configureStore({
    reducer: {
        cars: carsReducer,
        form: formReducer,
    }
});

export {
    store,
    changeSearchTerm,
    addCar,
    removeCar,
    changeName,
    changeCost
}