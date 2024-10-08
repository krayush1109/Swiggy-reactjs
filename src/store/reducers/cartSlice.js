import { createSlice } from "@reduxjs/toolkit";

const saveCartToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state.items)
        localStorage.setItem('cart', serializedState);
    } catch (err) {
        console.error(err.message)
    }
}

const loadCartFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('cart');
        if (serializedState === null) return [];
        return JSON.parse(serializedState);
    } catch (err) {
        console.error(err.message);
    }
}

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: loadCartFromLocalStorage()
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
            saveCartToLocalStorage(state);
        },
        removeItem: (state, action) => {
            state.items.pop();
            saveCartToLocalStorage(state);
        },
        clearCart: (state, action) => {
            state.items.length = 0;
            saveCartToLocalStorage(state);
        }
    }
})

// Export actions for use in components
export const { addItem, removeItem, clearCart } = cartSlice.actions;
// Export the reducer to be used in the store configuration
export default cartSlice.reducer;
