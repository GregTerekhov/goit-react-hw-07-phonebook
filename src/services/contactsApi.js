import axios from 'axios';

axios.defaults.baseURL = 'https://6464cf9c043c103502c39e4e.mockapi.io';

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  console.log(data);
  return data;
}

export async function addContact(contact) {
  return await axios.post('/contacts', contact).then(({ data }) => data);
}

export async function deleteContact() {
  await axios.delete();
}
