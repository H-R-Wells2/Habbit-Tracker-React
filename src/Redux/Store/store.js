import { configureStore } from "@reduxjs/toolkit";
import { habitReducer } from "../Reducer/habitReducer";

// creating store from reducers
export const store = configureStore({
    reducer: {
        habitReducer
    }
})