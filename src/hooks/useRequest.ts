import {
  useQuery,
  QueryKey,
  QueryFunction,
  UseQueryOptions,
} from 'react-query';

export const useRequest = (
  key: QueryKey,
  queryFn: QueryFunction,
  options?: UseQueryOptions
) => useQuery(key, queryFn, options);
