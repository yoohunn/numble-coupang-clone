import { useRouter } from 'next/router';
import { useState, useEffect, useMemo } from 'react';

import type { TLimit, TSorter } from '../../types/products.types';

const useProductsPath = () => {
  const router = useRouter();
  const query = router.query;

  const [sorter, setSorter] = useState(query.sorter ?? 'bestAsc');
  const [limit, setLimit] = useState(query.limit ?? 12);
  const [page, setPage] = useState(query.page ?? 1);

  const offset = useMemo(() => (+page - 1) * +limit, [page, limit]);

  const queryString = `offset=${offset}&limit=${limit}&sorter=${sorter}&page=${page}`;

  useEffect(() => {
    router.push(
      {
        pathname: '/products',
        query: { offset, limit, page, sorter },
      },
      undefined,
      { shallow: true }
    );
  }, [sorter, limit, page]);

  useEffect(() => {
    window.onpopstate = (e) => {
      const params = new Map();
      e.state.url
        .split('?')[1]
        .split('&')
        .forEach((i: string) => {
          const param = i.split('=');
          params.set(param[0], param[1]);
        });

      setSorter(params.get('sorter'));
      setLimit(params.get('limit'));
      setPage(params.get('page'));
    };
  }, [router.query]);

  const handelSorter = (value: TSorter) => {
    if (sorter === value) return;
    setSorter(value);
    setPage(1);
  };

  const handleLimit = (value: TLimit) => {
    if (limit === value) return;
    setLimit(value);
  };

  return {
    sorter,
    handelSorter,
    limit: +limit,
    handleLimit,
    offset,
    page: +page,
    setPage,
    queryString,
  };
};

export default useProductsPath;
