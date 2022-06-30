import { useRequest } from './useRequest';
import { UserService } from '../api/services';

export const useMe = () =>
  useRequest('me', UserService.me, { refetchInterval: 500 });

export const useRead = (id: number) =>
  useRequest(['read', id], () => UserService.read(id));
