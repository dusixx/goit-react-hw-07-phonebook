import { useSelector } from 'react-redux';
import * as contactThunks from './contacts/contactsThunks';
import { filterActions } from './filterSlice';
import { useDispatchedActions } from 'hooks/useDispatchedActions';
import { createSelector } from '@reduxjs/toolkit';
import { filterContacts } from 'utils';

// selectors

const selectFilter = state => state?.filter;
const selectContacts = state => state?.contacts;

const selectFilteredContacts = createSelector(
  [selectFilter, selectContacts],
  (filter, { items }) => filterContacts(items, filter)
);

// hooks

/* 
  !! Для удобства. Оптимальнее штатно использовать
  санки и селекторы в целевых компонентах
*/

export const useFilter = () => {
  const filter = useSelector(selectFilter);
  const dispatchedActions = useDispatchedActions(filterActions);

  return { filter, ...dispatchedActions };
};

export const useContacts = () => {
  const contacts = useSelector(selectContacts);
  const filtered = useSelector(selectFilteredContacts);
  const dispatchedThunks = useDispatchedActions(contactThunks);

  return {
    ...contacts,
    ...dispatchedThunks,
    filtered,
  };
};
