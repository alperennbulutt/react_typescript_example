import { createSlice } from '@reduxjs/toolkit';

// ----------------------------------------------------------------------

type ThemeMode = 'light' | 'dark';
type ThemeDirection = 'rlt' | 'ltr';

type SettingsState = {
  themeMode: ThemeMode;
  themeDirection: ThemeDirection;
};

const initialState: SettingsState = {
  themeMode: 'light',
  themeDirection: 'ltr'
};

const slice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    switchMode(state, action) {
      state.themeMode = action.payload;
    },
    switchDirection(state, action) {
      state.themeDirection = action.payload;
    }
  }
});

// Reducer
export default slice.reducer;

// Actions
export const { switchMode, switchDirection } = slice.actions;
