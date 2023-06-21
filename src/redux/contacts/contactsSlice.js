import { createSlice } from '@reduxjs/toolkit';
import * as thunk from './contactsThunks';
import * as handle from './handlers';

const initialState = {
  items: [],
  pendingAction: null,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(thunk.fetchAll.fulfilled, handle.fetchAllFulfilled)
      .addCase(thunk.addContact.fulfilled, handle.addContactFulfilled)
      .addCase(thunk.deleteContact.fulfilled, handle.deleteContactFulfilled)

      .addMatcher(({ type }) => type.endsWith('/fulfilled'), handle.fulfilled)
      .addMatcher(({ type }) => type.endsWith('/pending'), handle.pending)
      .addMatcher(({ type }) => type.endsWith('/rejected'), handle.rejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
