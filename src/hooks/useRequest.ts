import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import type { QueryKey, UseBaseQueryOptions } from '@tanstack/react-query';

export const useGet = <TResult>(
  key: QueryKey,
  func: () => Promise<TResult>,
  option?: UseBaseQueryOptions
) => {
  const { data } = useQuery(key, func, option);
  return data;
};

export const useMutate = <TData, TResult>(
  key: QueryKey,
  func: (args: TData) => Promise<TResult>
) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(func, {
    onSuccess: () => {
      queryClient.invalidateQueries(key);
    },
  });

  return mutate;
};
