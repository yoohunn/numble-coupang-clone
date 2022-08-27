import SortTabs from '../../src/components/products/index/SortTabs';
import useGetProducts from '../../src/hooks/products/useGetProducts';
import useProductsPath from '../../src/hooks/products/useProductsPath';

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
      {/* 
      <ProductList products={data} />
      <Pagination page={page} setPage={setPage}/> */}
    </>
  );
}
