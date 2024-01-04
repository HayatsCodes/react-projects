import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addItems(state, action) {
      console.log(action.payload);
      state.length = 0;
      action.payload.forEach(item => {
        state.push(item);
      });
    },
  },
});

export const { addItems } = itemsSlice.actions;
export default itemsSlice.reducer;