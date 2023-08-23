// import react from "react";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {itemsCount: 0, toggleCart: false, cartItems: []},
    reducers: {
        replaceCart(state, action) {
            state.cartItems = action.payload;
        },

        increaseItemsAmount(state, action) {
            state.itemsCount = state.itemsCount + (action.payload || 1);
        },

        incrementItemCount(state, action) {
            const choosenItem = state.cartItems.find((item) => item.title === action.payload);
            if (choosenItem) {
                choosenItem.count++;
                choosenItem.totalPrice = choosenItem.price * choosenItem.count;
            }
        },

        decrementItemCount(state, action) {
            const choosenItem = state.cartItems.find((item) => item.title === action.payload);
            if (choosenItem) {
                choosenItem.count--;
                choosenItem.totalPrice = choosenItem.totalPrice - choosenItem.price;
            }
        },

        removeTotalPrice(state, action) {
            state.totalPrice = state.totalPrice - action.payload;
        },

        toggleCart(state) {
            state.toggleCart = !state.toggleCart;
        },

        addCartItem(state, action) {
            const newItem = action.payload;
            const itemExist = state.cartItems.find((item) => item.title === newItem[0].title);
            if (state.cartItems.length && itemExist) {
                itemExist.count++;
                itemExist.totalPrice = itemExist.price * itemExist.count;
            } else {
                state.cartItems = [...state.cartItems, ...newItem]
            }
        }

    }
});

const itemSlice = createSlice({
    name: 'item',
    initialState: {items: [{
        title: 'test',
        price: 6,
        description: 'This is a first product - amazing!',
        count: 1,
        totalPrice: 6
      },
      {
        title: 'test2',
        price: 4,
        description: 'This is a second product - good!',
        count: 1,
        totalPrice: 4
      },
      {
        title: 'test3',
        price: 10,
        description: 'This is a third product - ok ok!',
        count: 1,
        totalPrice: 10
      },
    ]}
});


export const store = configureStore({
    reducer: {cart: cartSlice.reducer, items: itemSlice.reducer}
});
export const cartAction = cartSlice.actions;
export const itemAction = itemSlice.actions;