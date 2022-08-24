import axios from 'axios';
import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';

import SortTabs from '../../src/components/products/index/SortTabs';

import { TSorter } from '../../src/types/products.types';
import { useRouter } from 'next/router';

export default function ProductListPage() {
  const [sorter, setSorter] = useState<TSorter>('bestAsc');
  // limit
  // page

  const { data } = useQuery('products', () =>
    axios.get(
      process.env.NEXT_PUBLIC_API_HOST +
        `/products?offset=0&limit=12&sorter=${sorter}&page=2`
    )
  );

  // useProductsRout
  const router = useRouter();

  useEffect(() => {
    const sortQuery = sorter === 'bestAsc' ? '' : `?sorter=${sorter}`;

    router.push(`/products${sortQuery}`, undefined, { shallow: true });
  }, [sorter]);

  console.log(data);

  return (
    <>
      <SortTabs sorter={sorter} setSorter={setSorter} />
      {/* 
      <ProductList products={data} />
      <Pagination page={page} setPage={setPage}/> */}
    </>
  );
}
