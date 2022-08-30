import { Suspense, useEffect, useState, useMemo } from 'react';
import styled from '@emotion/styled';

import useProductsPath from '../../src/hooks/products/useProductsPath';
import useGetProducts from '../../src/hooks/products/useGetProducts';

import SortTabs from '../../src/components/products/index/SortTabs';
import ProductList from '../../src/components/products/index/ProductList';
import Pagination from '../../src/components/products/index/Pagination';
import Fallback from '../../src/components/common/Fallback';

import axios from 'axios';
import { useRouter } from 'next/router';
import type {
  IProductItem,
  TLimit,
  TSorter,
} from '../../src/types/products.types';
import { useQuery } from '@tanstack/react-query';

export default function ProductListPage() {
  const [sorter, setSorter] = useState<TSorter>('bestAsc');
  const [limit, setLimit] = useState<TLimit>(12);
  const [page, setPage] = useState<number>(1);

  const offset = useMemo(() => (page - 1) * limit, [page, limit]);

  const query = useMemo(
    () => `offset=${offset}&limit=${limit}&sorter=${sorter}`,
    [offset, limit, sorter]
  );

  const router = useRouter();

  useEffect(() => {
    router.push(`/products?sorter=${sorter}&page=${page}`, undefined, {
      shallow: true,
    });
  }, [sorter, page]);

  const fetchProducts = (query: string) =>
    axios
      .get(process.env.NEXT_PUBLIC_API_HOST + `/products?${query}`)
      .then((res) => res.data);

  const { data, isPreviousData } = useQuery<IProductItem[]>(
    ['products', query],
    () => fetchProducts(query),
    { keepPreviousData: true }
  );

  useEffect(() => {
    console.log({ query });
    console.log(data, isPreviousData);
  }, [query]);

  return (
    <Box>
      <SortTabs
        sorter={sorter}
        setSorter={setSorter}
        limit={limit}
        setLimit={setLimit}
      />
      <Suspense fallback={<Fallback />}>
        {data && <ProductList products={data} />}
      </Suspense>
      <Pagination page={page} setPage={setPage} totalPage={12} />
    </Box>
  );
}

const Box = styled.div`
  width: 1080px;
  margin: 40px auto;
`;
