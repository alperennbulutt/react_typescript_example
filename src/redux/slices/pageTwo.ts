import { createSlice } from '@reduxjs/toolkit';

// ----------------------------------------------------------------------

type data = string;

type dataState = {
  data: data;
};

const initialState: dataState = {
  data: ''
};

const slice = createSlice({
  name: 'dataState',
  initialState,
  reducers: {
    saveData(state, action) {
      state.data = action.payload;
    },

    getData(state, action) {
      state.data = action.payload;
    }
  }
});

// Reducer
export default slice.reducer;

// Actions
export const { saveData, getData } = slice.actions;
