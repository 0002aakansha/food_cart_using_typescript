import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import userReducer from "./userReducer";

const Store = configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer
    }
})

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch
export default Store