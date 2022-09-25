import type { Dispatch, SetStateAction } from 'react';

export * from './cart.types';
export * from './checkout.types';

export type TSetState<T> = Dispatch<SetStateAction<T>>;
