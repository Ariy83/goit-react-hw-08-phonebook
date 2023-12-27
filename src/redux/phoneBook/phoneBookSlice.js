import { createSlice } from '@reduxjs/toolkit';
import {
  addContactThunk,
  deleteContactThunk,
  fetchContactsThunk,
} from './operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const phoneBookSlice = createSlice({
  name: 'slice',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContactsThunk.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(addContactThunk.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts.items = payload;
        state.contacts.isLoading = false;
      })
      .addCase(fetchContactsThunk.rejected, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.error = payload;
      })
      .addCase(deleteContactThunk.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.items = state.contacts.items.filter(
          contact => contact.id !== payload
        );
      })
      .addCase(addContactThunk.fulfilled, (state, { payload }) => {
        state.contacts.items.push(payload);
        state.contacts.isLoading = false;
      });
  },

  reducers: {
    changeFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { changeFilter } = phoneBookSlice.actions;
export const phoneBookReducer = phoneBookSlice.reducer;
