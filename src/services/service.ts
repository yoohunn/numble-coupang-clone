import axios, { AxiosInstance } from 'axios';
import { tokenStorage, ITokenStorage } from './tokenStorage';

const baseURL = process.env.NEXT_PUBLIC_API_HOST;
const bearHeader = {
  Authorization: `Bearer ${tokenStorage.get('access')}`,
};

// axiosInstance
const publicClient = axios.create({ baseURL });

const privateClient = axios.create({
  baseURL,
  headers: { ...bearHeader },
});

// Service module
export default class Service {
  protected token: ITokenStorage = tokenStorage;
  protected client: AxiosInstance = publicClient;
  protected bearHeader = bearHeader;
}

export class PrivateService extends Service {
  protected client: AxiosInstance = privateClient;
}
