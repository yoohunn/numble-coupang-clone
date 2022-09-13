import {
  useQuery,
  useMutation,
  useQueryClient,
  UseQueryOptions,
} from '@tanstack/react-query';
import type { QueryKey } from '@tanstack/react-query';

export const useQueryData = <TResult>(
  key: QueryKey,
  func: () => Promise<TResult>,
  options?: UseQueryOptions<TResult>
) => {
  const { data } = useQuery<TResult>(key, func, options);
  return data;
};

export const useMutate = <TValue, TResult>(
  func: (value: TValue) => Promise<TResult>,
  key: QueryKey
) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(func, {
    onSuccess: () => {
      queryClient.invalidateQueries(key);
    },
  });

  return mutate;
};
