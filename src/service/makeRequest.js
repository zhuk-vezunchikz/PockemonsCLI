import axios from 'axios';

const makeRequest = async (config) => {
  const response = await axios(config);
  return response;
};

export default makeRequest;
