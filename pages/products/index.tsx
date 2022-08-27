import { Suspense } from 'react';
import styled from '@emotion/styled';

import SortTabs from '../../src/components/products/index/SortTabs';
import useGetProducts from '../../src/hooks/products/useGetProducts';
import useProductsPath from '../../src/hooks/products/useProductsPath';
import ProductList from '../../src/components/products/index/ProductList';

export default function ProductListPage() {
  const { query, sorter, setSorter } = useProductsPath();

  const { data } = useGetProducts(query);

  return (
    <Box>
      <SortTabs
        sorter={sorter}
        setSorter={setSorter}
        // limit={limit}
        // setLimit={setLimit}
      />
      <Suspense fallback={<h1> Loading ...</h1>}>
        {data && <ProductList products={data} />}
      </Suspense>
      {/*    <Pagination page={page} setPage={setPage}/> */}
    </Box>
  );
}

const Box = styled.div`
  width: 1080px;
  margin: 40px auto;
`;
