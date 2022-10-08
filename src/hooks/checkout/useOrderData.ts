import { useState } from 'react';
import type { IOrderData } from '../../types';

export const useOrderData = () => {
  const [orderData, setOrderData] = useState<IOrderData>({
    usedCash: 0,
    payMethod: 'coupaymoney',
  });

  const update = <Key extends keyof IOrderData>(
    key: Key,
    value: IOrderData[Key]
  ) => {
    setOrderData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return { orderData, update };
};
