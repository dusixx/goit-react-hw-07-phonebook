import { createSlice } from '@reduxjs/toolkit';
import { initialContacts } from 'data/contacts';
import { getId } from 'utils';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,

  reducers: {
    update: (contacts, { payload: newValue = initialContacts }) => newValue,

    add: (contacts, { payload: newContact }) => {
      contacts.push({ ...newContact, id: getId() });
    },

    remove: (contacts, { payload: contactId }) =>
      contacts.filter(({ id }) => id !== contactId),
  },
});

export const contactsReducer = contactsSlice.reducer;
export const contactsActions = contactsSlice.actions;
