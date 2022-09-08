import { useQuery } from '@tanstack/react-query';

import { ProductsService } from '../../services';
import type { IProductItem, IProductsQuery } from '../../types/products.types';

const useGetProducts = (query: IProductsQuery) => {
  const { data: products } = useQuery<IProductItem[]>(
    ['products', { query }],
    () => ProductsService.getProducts(query),
    { suspense: true, keepPreviousData: true }
  );

  return { products };
};

export default useGetProducts;
