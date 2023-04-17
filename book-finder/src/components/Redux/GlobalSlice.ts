import { createSlice } from "@reduxjs/toolkit";

export const globalSlice = createSlice({
  name: "global",
  initialState: {
    data: [],
    selectBook: [],
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setSelectBook: (state, action) => {
      state.selectBook = action.payload;
    },
  },
});

export const { setData, setSelectBook } = globalSlice.actions;

export default globalSlice.reducer;
