import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, setToken } from '../../configAxios/api';

export const fetchContactsThunk = createAsyncThunk(
  'fetchAll',
  async (_, thunkApi) => {
    const savedToken = thunkApi.getState().auth.token;
    if (savedToken) {
      setToken(savedToken);
    } else {
      return thunkApi.rejectWithValue('Token is not exist');
    }

    try {
      const { data } = await api.get('/contacts');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'deleteContact',
  async (id, thunkApi) => {
    const savedToken = thunkApi.getState().auth.token;
    if (savedToken) {
      setToken(savedToken);
    } else {
      return thunkApi.rejectWithValue('Token is not exist');
    }

    try {
      await api.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'addContact',
  async (contact, thunkApi) => {
    const savedToken = thunkApi.getState().auth.token;
    if (savedToken) {
      setToken(savedToken);
    } else {
      return thunkApi.rejectWithValue('Token is not exist');
    }

    try {
      const { data } = await api.post('/contacts', contact);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
