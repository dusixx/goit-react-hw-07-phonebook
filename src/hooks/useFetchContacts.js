import { useContacts } from 'redux/hooks';
import { useEffect } from 'react';

export const useFetchContacts = () => {
  const { fetchContacts, ...rest } = useContacts();

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  return { ...rest };
};
