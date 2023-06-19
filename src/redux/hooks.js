import { useDispatch, useSelector } from 'react-redux';
import { contactsActions } from './contactsSlice';
import { filterActions } from './filterSlice';

const useDispatchedActions = actions => {
  const dispatch = useDispatch();

  return Object.entries(actions).reduce((res, [actionName, func]) => {
    res[actionName] = value => dispatch(func(value));
    return res;
  }, {});
};

export const useFilter = () => {
  const filter = useSelector(state => state?.filter);
  const dispatchedActions = useDispatchedActions(filterActions);

  return { filter, ...dispatchedActions };
};

export const useContacts = () => {
  const contacts = useSelector(state => state?.contacts);
  const dispatchedActions = useDispatchedActions(contactsActions);

  // вместо [add, remove, ...] чтобы не привязываться к порядку в массиве
  return { contacts, ...dispatchedActions };
};
