import { useContacts } from 'redux/hooks';
import { useEffect } from 'react';

export const useFetchedContacts = () => {
  const { fetchAll, ...rest } = useContacts();

  useEffect(() => fetchAll(), [fetchAll]);

  return { ...rest };
};
