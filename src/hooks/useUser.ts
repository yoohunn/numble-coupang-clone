import { useQueryData, useMutate } from './useRequest';
import { AuthService, UserService } from '../services';
import type { ILoginData } from '../types/auth.types';

/** @return  userQueryData */
export const useGetUser = () =>
  useQueryData(['currentUser'], () => UserService.me(), { cacheTime: 1000 });

/** @return loginMutateFunction */
export const useLogin = () =>
  useMutate((id: ILoginData) => AuthService.login(id), ['currentUser']);
