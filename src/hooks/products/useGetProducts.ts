import { useQuery } from '@tanstack/react-query';

import { productsService } from '../../services/products.service';
import type { IProductItem, IProductsQuery } from '../../types/products.types';

const useGetProducts = (query: IProductsQuery) => {
  const { data: products } = useQuery<IProductItem[]>(
    ['products', { query }],
    () => productsService.getProducts(query),
    { suspense: true, keepPreviousData: true }
  );

  return { products };
};

export default useGetProducts;
