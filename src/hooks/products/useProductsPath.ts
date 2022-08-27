import { useRouter } from 'next/router';
import { useState, useEffect, useMemo } from 'react';

import { TLimit, TSorter } from '../../types/products.types';

const useProductsPath = () => {
  const router = useRouter();

  const [sorter, setSorter] = useState<TSorter>('bestAsc');
  const [limit, setLimit] = useState<TLimit>(12);
  const [page, setPage] = useState<number>(1);

  const offset = useMemo(() => (page - 1) * limit, [page, limit]);

  const query = useMemo(
    () => `?offset=${offset}&limit=${limit}&page=${page}&sorter=${sorter}`,
    [offset, limit, page, sorter]
  );

  useEffect(() => {
    router.push(`/products?sorter=${sorter}&page=${page}`, undefined, {
      shallow: true,
    });
  }, [sorter, page]);

  return { sorter, setSorter, limit, setLimit, page, setPage, query };
};

export default useProductsPath;
