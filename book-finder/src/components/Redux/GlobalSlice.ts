import { createSlice } from "@reduxjs/toolkit";

export const globalSlice = createSlice({
  name: "global",
  initialState: {
    data: [],
    selectBook: [],
    sortOrder: [],
    sortedBooks: [],
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
    setSortedBooks: (state, action) => {
      state.sortedBooks = action.payload;
    },
  },
});

export const { setData, setSelectBook, setSortOrder, setSortedBooks } =
  globalSlice.actions;

export default globalSlice.reducer;
