import styled from '@emotion/styled';

import SortTab from './SortTab';
import Options from './Options';

import type {
  ILimitState,
  ISorterState,
  TSorter,
} from '../../../types/products.types';

interface IProps extends ISorterState, ILimitState {}

const SortTabs = ({ sorter, setSorter, limit, setLimit }: IProps) => {
  const sortTabs: { id: TSorter; name: string }[] = [
    { id: 'bestAsc', name: '쿠팡 랭킹순' },
    { id: 'salePriceAsc', name: '낮은 가격순' },
    { id: 'salePriceDesc', name: '높은 가격순' },
    { id: 'saleCountDesc', name: '판매량순' },
    { id: 'latestAsc', name: '최신순' },
  ];

  return (
    <Div>
      {sortTabs.map(({ id, name }) => (
        <SortTab
          key={id}
          name={name}
          isActive={sorter === id}
          sorter={id}
          setSorter={setSorter}
        />
      ))}

      <Options limit={limit} setLimit={setLimit} />
    </Div>
  );
};

export default SortTabs;

const Div = styled.div`
  max-width: 100%;
  display: flex;
  align-items: center;
  height: 32px;
  margin-top: 15px;
  margin-bottom: 15px;
  background-color: #fafafa;
`;
