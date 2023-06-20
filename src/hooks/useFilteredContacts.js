import { useMemo } from 'react';
import { useContacts, useFilter } from 'redux/hooks';
import { filterContacts } from 'utils';

export const useFilteredContacts = () => {
  const { filter } = useFilter();
  const { items } = useContacts();

  const filtered = useMemo(
    () => filterContacts(items, filter),
    [items, filter]
  );

  return { filtered };
};
