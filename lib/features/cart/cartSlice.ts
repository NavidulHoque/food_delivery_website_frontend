import { createSlice, PayloadAction, current  } from "@reduxjs/toolkit";

interface Cart {
    cart: { [key: string]: number };
    loading: boolean;
}

const initialState: Cart = {
    cart: {},
    loading: true
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

        retrieve: (state, action: PayloadAction<{ [key: string]: number }>) => {
            state.cart = action.payload
            state.loading = false
        },

        add: (state, action: PayloadAction<string>) => {

            const item = action.payload;

            state.cart[item] = (state.cart[item] || 0) + 1;

            localStorage.setItem("cartOfFoodDelivery", JSON.stringify(current(state.cart)));
        },

        remove: (state, action: PayloadAction<string>) => {

            const item = action.payload;

            state.cart[item] = state.cart[item] - 1;

            if (state.cart[item] === 0) {
                delete state.cart[item]
            }

            localStorage.setItem("cartOfFoodDelivery", JSON.stringify(current(state.cart)));
        }
    }
})

export const { retrieve, add, remove } = cartSlice.actions
export default cartSlice.reducer