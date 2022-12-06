import { createSlice } from '@reduxjs/toolkit';

export interface InmailState {}

const initialState: InmailState = {};

const inmailSlice = createSlice({
  name: 'inmail',
  initialState,
  reducers: {},
  extraReducers: {},
});

// Actions
export const inmailActions = inmailSlice.actions;

// Selectors

// Reducer
const inmailReducer = inmailSlice.reducer;
export default inmailReducer;
