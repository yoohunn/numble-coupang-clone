import axios from 'axios';
import { useQuery } from 'react-query';

import { IProductItem } from '../../types/products.types';

const useGetProducts = (query: string) => {
  const fetchProducts = () =>
    axios
      .get(process.env.NEXT_PUBLIC_API_HOST + `/products${query}`)
      .then((res) => res.data);

  const { data } = useQuery<IProductItem[]>('products', fetchProducts, {
    suspense: true,
  });

  return { data };
};

export default useGetProducts;
