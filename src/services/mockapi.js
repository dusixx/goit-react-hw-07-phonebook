import axios from 'axios';

const BASE_URL = `https://648f78af75a96b6644452a08.mockapi.io/phoneBook`;

axios.defaults.baseURL = `${BASE_URL}/contacts/`;

export const fetchContacts = async () => {
  const res = await axios.get();
  return res.data;
};

// data: {name, number, ...}
export const addContact = async data => {
  const res = await axios.post('', data);
  return res.data;
};

export const deleteContact = async id => {
  const res = await axios.delete(id);
  return res.data;
};
