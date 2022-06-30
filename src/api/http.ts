import axios, { AxiosInstance } from 'axios';
import { getRefreshToken } from './token';

const url = process.env.NEXT_PUBLIC_API_HOST;

export default class HttpClient {
  client: AxiosInstance;

  constructor(path: '/auth' | '/users') {
    this.client = axios.create({
      baseURL: url + path,
      withCredentials: true,
    });

    this.client.interceptors.request.use((config) => {
      const token = getRefreshToken();

      if (token && config.headers) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }

      return config;
    });
  }
}
