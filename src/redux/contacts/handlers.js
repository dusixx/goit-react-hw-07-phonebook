export const fetchAllFulfilled = (state, { payload: newItems }) => {
  state.items = newItems;
};

export const addContactFulfilled = ({ items }, { payload: data }) => {
  items.push(data);
};

export const deleteContactFulfilled = (state, { payload: { id } }) => {
  state.items = state.items.filter(itm => itm.id !== id);
};

// common

export const fulfilled = state => {
  state.pendingAction = state.error = null;
};

export const pending = (state, action) => {
  state.pendingAction = action.type.replace(/\/pending/i, '');
};

export const rejected = (state, { payload: error }) => {
  state.pendingAction = null;
  state.error = error;
};
