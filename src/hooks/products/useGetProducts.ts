import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

import type { IProductItem, IProductsQuery } from '../../types/products.types';

const useGetProducts = (query: IProductsQuery) => {
  const queryString = `offset=${query.offset}&page=${query.page}&limit=${query.limit}&sorter=${query.sorter}`;
  console.log('~ queryString', queryString);
  const fetchProducts = () =>
    axios
      .get(process.env.NEXT_PUBLIC_API_HOST + '/products?' + queryString)
      .then((res) => res.data);

  const { data: products } = useQuery<IProductItem[]>(
    ['products', queryString],
    fetchProducts,
    { suspense: true, keepPreviousData: true }
  );

  return { products };
};

export default useGetProducts;
