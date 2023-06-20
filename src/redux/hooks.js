import { useSelector } from 'react-redux';
import * as contactThunks from './contactsThunks';
import { filterActions } from './filterSlice';
import { useDispatchedActions } from 'hooks/useDispatchedActions';

const selectFilter = state => state?.filter;
const selectContacts = state => state?.contacts;

export const useFilter = () => {
  const filter = useSelector(selectFilter);
  const dispatchedActions = useDispatchedActions(filterActions);

  return { filter, ...dispatchedActions };
};

export const useContacts = () => {
  const contacts = useSelector(selectContacts);
  const dispatchedThunks = useDispatchedActions(contactThunks);

  return {
    ...contacts,
    ...dispatchedThunks,
  };
};
