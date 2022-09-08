import { QueryKey, useMutation, useQueryClient } from '@tanstack/react-query';

export const useCustomMutation = <TData, TResult>(
  func: (args: TData) => Promise<TResult>,
  key: QueryKey
) => {
  const queryClient = useQueryClient();

  const mutation = useMutation(func, {
    onSuccess: () => {
      queryClient.invalidateQueries(key);
      console.log(`Updated`);
    },
  });

  return mutation;
};
