import { configureStore } from "@reduxjs/toolkit";

import globalReducer, { setData, setSelectBook } from "./GlobalSlice";

import { bookData } from "../../testData/testData";

describe("GlobalSlice State Tests", () => {
  let store: any;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        global: globalReducer,
      },
    });
  });

  test("Should setData to an array", () => {
    store.dispatch(setData(bookData));
    const state = store.getState().global;
    expect(state.data).toEqual(bookData);
  });

  test("Should setSelectBook to an array", () => {
    store.dispatch(setSelectBook(bookData));
    const state = store.getState().global;
    expect(state.selectBook).toEqual(bookData);
  });
});
