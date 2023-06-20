import { useContacts } from 'redux/hooks';
import { useEffect } from 'react';

export const useContactsList = () => {
  const { fetchContacts, ...rest } = useContacts();

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  // items, isLoading, error
  return { ...rest };
};
