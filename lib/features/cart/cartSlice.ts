import { createSlice, PayloadAction  } from "@reduxjs/toolkit";

interface Cart {
    cart: { [key: string]: number }
}

const initialState: Cart = {
    cart: {} 
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

        retrieve: (state, action: PayloadAction<{ [key: string]: number }>) => {
            state.cart = action.payload
        },

        add: (state, action: PayloadAction<string>) => {

            const item = action.payload;

            state.cart[item] = (state.cart[item] || 0) + 1;
        },

        remove: (state, action: PayloadAction<string>) => {

            const item = action.payload;

            state.cart[item] = (state.cart[item] || 0) - 1;

            if (state.cart[item] === 0) {
                delete state.cart[item]
            }
        }
    }
})

export const { retrieve, add, remove } = cartSlice.actions
export default cartSlice.reducer