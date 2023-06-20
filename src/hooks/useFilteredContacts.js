import { useMemo } from 'react';
import { useContacts, useFilter } from 'redux/hooks';

const filterContacts = (contacts, filter) => {
  const searchStr = filter?.trim().toLocaleLowerCase();

  return searchStr
    ? contacts?.filter(
        ({ name, number }) =>
          name.toLocaleLowerCase().includes(searchStr) ||
          number.includes(searchStr)
      )
    : contacts;
};

export const useFilteredContacts = () => {
  const { filter } = useFilter();
  const { items: contacts } = useContacts();

  const filtered = useMemo(
    () => filterContacts(contacts, filter),
    [contacts, filter]
  );

  return { filtered };
};
