import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  loginThunk,
  logoutThunk,
  refreshThunk,
  registrationThunk,
} from './operations';

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: '',
  isLogIn: false,
  isRefreshing: false,
  error: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(logoutThunk.fulfilled, state => {
        state.user = initialState.user;
        state.isLogIn = false;
        state.token = '';
      })
      .addCase(refreshThunk.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.isLogIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshThunk.rejected, state => {
        state.isRefreshing = false;
      })
      .addMatcher(
        isAnyOf(registrationThunk.fulfilled, loginThunk.fulfilled),
        (state, { payload }) => {
          state.user = payload.user;
          state.token = payload.token;
          state.isLogIn = true;
        }
      )
      .addMatcher(
        isAnyOf(
          refreshThunk.rejected,
          registrationThunk.rejected,
          logoutThunk.rejected
        ),
        (state, { payload }) => {
          state.error = payload;
          state.isRefreshing = false;
        }
      );
  },
});

export const authReducer = slice.reducer;
