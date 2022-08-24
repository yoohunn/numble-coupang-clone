import styled from '@emotion/styled';

import SortTab from './SortTab';
import { ISorterState, TSorter } from '../../../types/products.types';

interface IProps extends ISorterState {}

const SortTabs = ({ sorter, setSorter }: IProps) => {
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
        <SortTab //
          key={id}
          id={id}
          name={name}
          sorter={sorter}
          setSorter={setSorter}
        />
      ))}

      {/* <Selection setLimit /> */}
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
