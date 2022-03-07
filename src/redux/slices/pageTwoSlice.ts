import { createSlice } from '@reduxjs/toolkit';
import Axios from 'axios';
import { dispatch } from '../store';
// ----------------------------------------------------------------------

type dataState = {
  value: string;
  apiData: any;
};

const initialState: dataState = {
  value: '',
  apiData: []
};

const slice = createSlice({
  name: 'dataState',
  initialState,
  reducers: {
    saveData: (state, action) => {
      state.value = action.payload;
    },
    saveApiData: (state, action) => {
      state.apiData = action.payload;
    }
  }
});

// Reducer
export default slice.reducer;

// Actions
export const { saveData, saveApiData } = slice.actions;

// functions

// get data from mongodb
export function getDataFromApi(indexNumber: number) {
  Axios.get('http://localhost:3000/posts').then(async (response) => {
    console.log('response geldii ', response);

    console.log('response title gelecekk', response.data[indexNumber].title);

    await dispatch(saveApiData(response.data[indexNumber].title));
  });
}

// save data to mongodb(backend)

export async function saveDataToApi(model: any) {
  await Axios.post('http://localhost:3000/posts', {
    title: 'Başlık',
    description: model
  });
}
