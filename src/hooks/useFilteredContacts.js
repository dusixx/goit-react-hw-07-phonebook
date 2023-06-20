import { useMemo } from 'react';
import { useContacts, useFilter } from 'redux/hooks';
import { filterContacts } from 'utils';

export const useFilteredContacts = () => {
  const { filter } = useFilter();
  const { items: contacts } = useContacts();

  const filtered = useMemo(
    () => filterContacts(contacts, filter),
    [contacts, filter]
  );

  return { filtered };
};
