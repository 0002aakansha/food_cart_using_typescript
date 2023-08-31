import { createSlice } from "@reduxjs/toolkit";
import { cartType } from "../types/types";

const initialState: cartType = {
    items: [], subTotal: 0, totalQuantity: 0, open: false
}

const cartReducer = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setOpen: state => {
            state.open = !state.open
        },
        addToCart: (state, action) => {
            const existedItemIndex = state.items.findIndex(item => item.id === action.payload.id)

            if (existedItemIndex !== -1) {
                const existedItem = state.items[existedItemIndex]
                existedItem.quantity += 1
                existedItem.totalPrice += action.payload.unitPrice
                state.items[existedItemIndex] = existedItem
            }
            else {
                state.items.push({ ...action.payload, quantity: 1, totalPrice: action.payload.unitPrice })
            }
            state.subTotal += action.payload.unitPrice
            state.totalQuantity += 1
        },
        removeFromCart: (state, action) => {
            const existedItemIndex = state.items.findIndex(item => item.id === action.payload)
            const existedItem = state.items[existedItemIndex]

            if (existedItem.quantity > 1) {
                existedItem.quantity -= 1
                existedItem.totalPrice -= existedItem.unitPrice
            }
            else {
                state.items.splice(existedItemIndex, 1)
            }
            state.subTotal -= existedItem.unitPrice
            state.totalQuantity -= 1
        }
    }
})

export const { setOpen, addToCart, removeFromCart } = cartReducer.actions
export default cartReducer.reducer