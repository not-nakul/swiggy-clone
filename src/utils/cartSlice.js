import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0,
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      state.totalAmount = state.totalAmount + action.payload.price;
    },
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
