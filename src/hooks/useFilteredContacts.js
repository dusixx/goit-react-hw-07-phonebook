import { useContacts } from 'redux/hooks';
import { useFilter } from 'redux/hooks';

export const useFilteredContacts = () => {
  const { filter } = useFilter();
  const { items: contacts } = useContacts();
  const filtered = filterContacts(contacts, filter);

  return { filtered };
};

function filterContacts(contacts, filter) {
  const searchStr = filter?.trim().toLocaleLowerCase();

  return searchStr
    ? contacts?.filter(
        ({ name, number }) =>
          name.toLocaleLowerCase().includes(searchStr) ||
          number.includes(searchStr)
      )
    : contacts;
}
