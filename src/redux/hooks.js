import { useDispatch, useSelector } from 'react-redux';
import * as contactThunks from './contactsThunks';
import { filterActions } from './filterSlice';

const memo = new Map();

const useDispatchedActions = actions => {
  const dispatch = useDispatch();

  const dispatchedActions =
    memo.get(actions) ??
    Object.entries(actions).reduce((res, [actionName, func]) => {
      const name = actionName.replace(/thunk/i, '');
      res[name] = value => dispatch(func(value));

      return res;
    }, {});

  // стабилизируем, чтобы не изменялись при каждом рендере в зависимостях
  // Иначе, каждый раз будет создаваться новые value => dispatch(...)
  memo.set(actions, dispatchedActions);

  return dispatchedActions;
};

export const useFilter = () => {
  const filter = useSelector(state => state?.filter);
  const dispatchedActions = useDispatchedActions(filterActions);

  return { filter, ...dispatchedActions };
};

export const useContacts = () => {
  const contacts = useSelector(state => state?.contacts);
  const dispatchedThunks = useDispatchedActions(contactThunks);

  // contacts: {items, isLoading, error}
  return {
    ...contacts,
    ...dispatchedThunks,
  };
};
