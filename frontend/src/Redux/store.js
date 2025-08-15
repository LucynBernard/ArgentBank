import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSliceTemp";

export const store = configureStore({
    reducer: {
        auth: authReducer
    }
});