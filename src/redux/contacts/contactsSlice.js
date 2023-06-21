import { createSlice } from '@reduxjs/toolkit';
import * as thunk from './contactsThunks';
import * as handler from './handlers';

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
      .addCase(thunk.fetchAll.fulfilled, handler.fetchAllFulfilled)
      .addCase(thunk.addContact.fulfilled, handler.addContactFulfilled)
      .addCase(thunk.deleteContact.fulfilled, handler.deleteContactFulfilled)

      .addMatcher(({ type }) => type.endsWith('/fulfilled'), handler.fulfilled)
      .addMatcher(({ type }) => type.endsWith('/pending'), handler.pending)
      .addMatcher(({ type }) => type.endsWith('/rejected'), handler.rejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
