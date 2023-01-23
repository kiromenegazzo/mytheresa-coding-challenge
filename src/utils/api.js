import axios from 'axios';
import { camelizeKeys, decamelizeKeys } from 'humps';
import { toast } from 'react-toastify';

import { envVars } from 'utils/envVars';
import { getUrl } from 'utils/getUrl';

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  withCredentials: false,
  headers: {
    'Authorization': `Bearer ${envVars.MOVIE_API_KEY}`,
    'Content-Type': 'application/json;charset=utf-8',
  },
  transformResponse: [(data) => {
    try {
      if (!data) return null;

      const response = JSON.parse(data);

      return camelizeKeys(response);
    } catch (error) {
      throw Error(`[requestClient] Error parsing response JSON data - ${JSON.stringify(error)}`);
    }
  }],
});

export const fetchList = (query) => axiosInstance.get(getUrl('discover/movie', { query: decamelizeKeys(query) }));

export const fetchItem = (id) => axiosInstance.get(getUrl('movie/:id', { id }));

export async function callApi(fetchFn, params) {
  try {
    const response = await fetchFn(params);

    return response?.data;
  } catch (error) {
    const { message } = error;

    toast.error(message, { autoClose: false, toastId: message });

    return null;
  }
}
