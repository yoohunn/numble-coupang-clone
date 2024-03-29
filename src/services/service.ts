import axios, { AxiosInstance } from 'axios';
import { TokenStorage } from './tokenStorage';

const tokenStorage = new TokenStorage();
const baseURL = process.env.NEXT_PUBLIC_API_HOST;
const setBearer = (access?: string) => ({
  Authorization: `Bearer ${access ? access : tokenStorage.get('access')}`,
});

// axiosInstance
const publicClient = axios.create({ baseURL });

const privateClient = axios.create({
  baseURL,
  headers: { ...setBearer() },
});

// Service
export default class Service {
  protected token = tokenStorage;
  protected client: AxiosInstance = publicClient;
  protected setBearer = setBearer;
}

export class PrivateService extends Service {
  protected client: AxiosInstance = privateClient;
}
