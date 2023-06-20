import { createSlice } from '@reduxjs/toolkit';
import * as thunk from './contactsThunks';

const initialState = {
  items: [],
  pendingAction: null,
  error: null,
};

const handleFetchContactsFulfilled = (state, { payload: newItems }) => {
  state.items = newItems;
};

const handleAddContactFulfilled = ({ items }, { payload: data }) => {
  items.push(data);
};

const handleDeleteContactFulfilled = (state, { payload: { id } }) => {
  state.items = state.items.filter(itm => itm.id !== id);
};

// common

const handleFulfilled = state => {
  state.pendingAction = state.error = null;
};

const handlePending = (state, action) => {
  state.pendingAction = action.type.replace(/\/pending/i, '');
};

const handleRejected = (state, { payload: error }) => {
  state.pendingAction = null;
  state.error = error;
};

//
// contactsSlice
//

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(thunk.fetchContactsThunk.fulfilled, handleFetchContactsFulfilled)
      .addCase(thunk.addContactThunk.fulfilled, handleAddContactFulfilled)
      .addCase(thunk.deleteContactThunk.fulfilled, handleDeleteContactFulfilled)

      .addMatcher(({ type }) => type.endsWith('/fulfilled'), handleFulfilled)
      .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
      .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
