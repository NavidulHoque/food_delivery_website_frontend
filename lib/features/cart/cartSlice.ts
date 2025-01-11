import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Cart {
    cart: { [key: string]: number };
}

const initialState: Cart = {
    cart: {}
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

        retrieveCart: (state, action: PayloadAction<{ [key: string]: number }>) => {
            state.cart = action.payload
        },

        addFrontend: (state, action: PayloadAction<string>) => {

            const item = action.payload;

            state.cart[item] = (state.cart[item] || 0) + 1;
        },

        removeFrontend: (state, action: PayloadAction<string>) => {

            const item = action.payload;

            state.cart[item] = state.cart[item] - 1;

            if (state.cart[item] === 0) {
                delete state.cart[item]
            }
        }
    }
})

export const { retrieveCart, addFrontend, removeFrontend } = cartSlice.actions
export default cartSlice.reducer