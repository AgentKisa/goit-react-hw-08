import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const sliceFilters = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const filterReducer = sliceFilters.reducer;
export const { changeFilter } = sliceFilters.actions;
