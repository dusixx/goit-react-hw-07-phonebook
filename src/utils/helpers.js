export const formatName = s => s.trim().replace(/\s+/g, ' ');

export const formatNumber = number => {
  return number
    .replace(/[\s-]/g, '')
    .replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
};

export const filterContacts = (contacts, filter) => {
  const searchStr = filter?.trim().toLocaleLowerCase();

  return searchStr
    ? contacts?.filter(
        ({ name, number }) =>
          name.toLocaleLowerCase().includes(searchStr) ||
          number.includes(searchStr)
      )
    : contacts;
};

export const isContactExists = (contacts, { name, number }) =>
  contacts.find(
    itm =>
      itm.name.toLocaleLowerCase() === name.toLocaleLowerCase() ||
      itm.number === number
  );
