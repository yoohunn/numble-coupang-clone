import { Suspense, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import styled from '@emotion/styled';

import type { ParsedUrlQuery } from 'querystring';
import type {
  IProductsQuery,
  TLimit,
  TSorter,
} from '../../src/types/products.types';

import SortTabs from '../../src/components/products/index/SortTabs';
import Pagination from '../../src/components/products/index/Pagination';
import Fallback from '../../src/components/common/Fallback';

const ProductList = dynamic(
  () => import('../../src/components/products/index/ProductList'),
  { ssr: false }
);

export default function ProductListPage() {
  // url을 읽어와 valid 하면 state에 설정한다.
  const router = useRouter();

  const [query, setQuery] = useState<IProductsQuery>({
    offset: 0,
    page: 1,
    limit: 12,
    sorter: 'bestAsc',
  });

  useEffect(() => {
    if (isEmpty(router.query)) {
      return;
    }

    const parsed = parseQuery(router.query);

    if (!isvalidType(parsed)) {
      console.log(`not valid query!!`);
      return;
    }

    setQuery(parsed);
  }, [router.query]);

  // url을 업데이트 한다.

  const updateURL = (params: Partial<IProductsQuery>) => {
    router.push(
      {
        pathname: '/products',
        query: { ...router.query, ...params },
      },
      undefined,
      { shallow: true }
    );
  };

  const updateLimit = (limit: TLimit) => {
    updateURL({ limit });
  };

  const updateSorter = (sorter: TSorter) => {
    updateURL({ sorter, page: 1, offset: 0 });
  };

  const updatePage = (page: number) => {
    updateURL({ page, offset: (page - 1) * query.limit });
  };

  return (
    <Box>
      <SortTabs
        sorter={query.sorter}
        setSorter={updateSorter}
        limit={query.limit}
        setLimit={updateLimit}
      />

      <Suspense fallback={<Fallback />}>
        <ProductList query={query} />
      </Suspense>

      <Pagination page={query.page} setPage={updatePage} totalPage={12} />
    </Box>
  );
}

const Box = styled.div`
  width: 1080px;
  margin: 40px auto;
`;

// url 유효성 검사 로직
function parseQuery(query: ParsedUrlQuery) {
  const { limit, page, offset, sorter } = query;
  return {
    offset: offset ? +offset : 0,
    limit: limit ? +limit : 12,
    page: page ? +page : 1,
    sorter: sorter ? sorter : 'bestAsc',
  };
}

function isvalidType(query: {}): query is IProductsQuery {
  return (
    'offset' in query &&
    'page' in query &&
    'limit' in query &&
    'sorter' in query
  );
}

function isEmpty(query: ParsedUrlQuery) {
  return Object.keys(query).length === 0;
}
