import axios from 'axios';

export default (data = {}) => {
  const { token, URL } = data;

  const baseURL = 'https://mighty-thicket-41794.herokuapp.com';
  const headers = {
    'access-token': token || undefined,
    // Authorization: `Bearer ${localStorage.token || undefined}`,
  };

  return  axios.create({ baseURL, headers });
};
