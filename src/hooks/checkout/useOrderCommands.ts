import type { IOrderData, TOnChangePayMethod, TSetState } from '../../types';

/** 주문정보 변경 */
export function useOrderCommands(setOrderData: TSetState<IOrderData>) {
  const changeUsedCash = (usedCash: number) =>
    setOrderData((data) => ({ ...data, usedCash }));

  const changePayMethod: TOnChangePayMethod = (changed) =>
    setOrderData((data) => ({ ...data, ...changed }));

  return { changeUsedCash, changePayMethod };
}
