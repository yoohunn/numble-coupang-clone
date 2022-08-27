import { useQuery } from 'react-query';
import axios from 'axios';

const useGetProducts = (query: string) => {
  const { data } = useQuery(
    'products',
    () => axios.get(process.env.NEXT_PUBLIC_API_HOST + `/products${query}`),
    { suspense: true }
  );

  return { data };
};

export default useGetProducts;
