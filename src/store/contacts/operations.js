import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsApi from 'services/contactsApi';

export const handleFetchContactsThunk = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkApi) => {
    try {
      const response = await contactsApi.fetchContacts();
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const handleAddNewContactThunk = createAsyncThunk(
  'contacts/addNewContact',
  async ({ contact }, thunkApi) => {
    try {
      const contacts = await contactsApi.fetchContacts(contact);
      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
