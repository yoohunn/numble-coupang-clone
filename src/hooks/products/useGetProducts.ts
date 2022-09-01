import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

import type { IProductItem } from '../../types/products.types';

const useGetProducts = (query: string) => {
  const fetchProducts = () =>
    axios
      .get(process.env.NEXT_PUBLIC_API_HOST + '/products?' + query)
      .then((res) => res.data);

  const { data: products } = useQuery<IProductItem[]>(
    ['products', query],
    fetchProducts,
    { suspense: true, keepPreviousData: true }
  );

  return { products };
};

export default useGetProducts;
