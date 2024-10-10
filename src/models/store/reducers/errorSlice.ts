import { errorType } from "@models/type";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: errorType = {
  fetchError: null,
};

const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    setFetchError: (state: errorType, action: PayloadAction<string | null>) => {
      return { ...state, fetchError: action.payload };
    },
  },
});

export const { setFetchError } = errorSlice.actions;

export default errorSlice.reducer;
