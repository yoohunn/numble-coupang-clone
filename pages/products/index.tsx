import SortTabs from '../../src/components/products/index/SortTabs';
import useGetProducts from '../../src/hooks/products/useGetProducts';
import useProductsPath from '../../src/hooks/products/useProductsPath';
import ProductList from '../../src/components/products/index/ProductList';
import { Suspense } from 'react';

export default function ProductListPage() {
  const { query, sorter, setSorter } = useProductsPath();

  const { data } = useGetProducts(query);

  return (
    <>
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
    </>
  );
}
