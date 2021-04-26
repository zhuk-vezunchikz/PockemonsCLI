import { BASE_URL } from '../../config';

export const getTargetPockemonRequest = (title) => {
  return {
    url: `${BASE_URL}/pokemon/${title}`,
    method: 'get',
    headers: {},
  };
};
