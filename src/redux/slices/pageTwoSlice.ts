import { createSlice } from '@reduxjs/toolkit';

// ----------------------------------------------------------------------

type dataState = {
  value: string;
};

const initialState: dataState = {
  value: ''
};

const slice = createSlice({
  name: 'dataState',
  initialState,
  reducers: {
    saveData: (state, action) => {
      state.value = action.payload;
    }
  }
});

// Reducer
export default slice.reducer;

// Actions
export const { saveData } = slice.actions;
