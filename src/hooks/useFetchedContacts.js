import { useContacts } from 'redux/hooks';
import { useEffect } from 'react';

export const useFetchedContacts = () => {
  const { fetchContacts, ...rest } = useContacts();

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  return { ...rest };
};
