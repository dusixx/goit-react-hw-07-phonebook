import { useMemo, useRef } from 'react';
import { useDispatch } from 'react-redux';

export const useDispatchedActions = actions => {
  const dispatch = useDispatch();
  const actionsRef = useRef(actions);

  const dispatchedActions = useMemo(() => {
    console.log('dispatchedActions');
    return Object.entries(actionsRef.current).reduce(
      (res, [actionName, func]) => {
        const name = actionName.replace(/thunk$/i, '');
        res[name] = value => dispatch(func(value));

        return res;
      },
      {}
    );
  }, [dispatch]);

  return dispatchedActions;
};
