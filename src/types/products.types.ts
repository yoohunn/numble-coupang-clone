import { Dispatch, SetStateAction } from 'react';

export type TSorter =
  | 'bestAsc'
  | 'salePriceAsc'
  | 'salePriceDesc'
  | 'saleCountDesc'
  | 'latestAsc';

export interface ISorterState {
  sorter: TSorter;
  setSorter: Dispatch<SetStateAction<TSorter>>;
}
