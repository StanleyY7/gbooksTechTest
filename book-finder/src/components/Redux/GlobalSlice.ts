import { createSlice } from "@reduxjs/toolkit";

export const globalSlice = createSlice({
  name: "global",
  initialState: {
    data: [],
    selectBook: [],
    sortOrder: [],
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setSelectBook: (state, action) => {
      state.selectBook = action.payload;
    },
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload;
    },
  },
});

export const { setData, setSelectBook, setSortOrder } = globalSlice.actions;

export default globalSlice.reducer;
