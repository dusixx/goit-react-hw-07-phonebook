import { useContacts } from 'redux/hooks';
import { useEffect } from 'react';

export const useFetchedContacts = () => {
  const { fetchAll, ...rest } = useContacts();
  useEffect(() => void fetchAll(), [fetchAll]);

  return { ...rest };
};
