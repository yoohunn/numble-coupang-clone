import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import styled from '@emotion/styled';

import useProductsPath from '../../src/hooks/products/useProductsPath';

import SortTabs from '../../src/components/products/index/SortTabs';
import Pagination from '../../src/components/products/index/Pagination';
import Fallback from '../../src/components/common/Fallback';

const ProductList = dynamic(
  () => import('../../src/components/products/index/ProductList'),
  { suspense: true }
);

export default function ProductListPage() {
  const {
    queryString,
    sorter,
    handelSorter,
    limit,
    handleLimit,
    page,
    setPage,
  } = useProductsPath();

  return (
    <Box>
      <SortTabs
        sorter={sorter}
        setSorter={handelSorter}
        limit={limit}
        setLimit={handleLimit}
      />

      <Suspense fallback={<Fallback />}>
        <ProductList query={queryString} />
      </Suspense>

      <Pagination page={page} setPage={setPage} totalPage={12} />
    </Box>
  );
}

const Box = styled.div`
  width: 1080px;
  margin: 40px auto;
`;
