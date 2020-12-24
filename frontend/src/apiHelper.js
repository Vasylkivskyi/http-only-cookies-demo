import axios from 'axios';

const api = () => {
  axios.defaults.withCredentials = true;
  const api = axios.create({
    baseURL: 'http://localhost:7878',
    timeout: 10000,
    withCredentials: true,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  });
  return api
};

export default api(axios);