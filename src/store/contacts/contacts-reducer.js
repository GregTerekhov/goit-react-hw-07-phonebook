import { createSlice } from '@reduxjs/toolkit';
import { handleFetchContactsThunk } from './operations';
// import { nanoid } from 'nanoid';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, { payload }) => {
      state.items.push(payload);
    },
    deleteContact: (state, { payload }) => {
      const index = state.findIndex(contact => contact.id === payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(handleFetchContactsThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(handleFetchContactsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload.items;
      })
      .addCase(handleFetchContactsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = null;
      });
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
