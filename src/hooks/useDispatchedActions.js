import { useDispatch } from 'react-redux';

const memo = new Map();

export const useDispatchedActions = actions => {
  const dispatch = useDispatch();

  const dispatchedActions =
    memo.get(actions) ??
    Object.entries(actions).reduce((res, [actionName, func]) => {
      const name = actionName.replace(/thunk$/i, '');
      res[name] = value => dispatch(func(value));

      return res;
    }, {});

  // стабилизируем, чтобы не изменялись value => dispatch(...)
  // при каждом рендере в зависимостях. Иначе, зациклится
  memo.set(actions, dispatchedActions);

  console.log(dispatchedActions);

  return dispatchedActions;
};
