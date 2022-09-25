import { useSubscriber } from '../useBroadcast';
import type {
  IAddress,
  IOrderData,
  IOrdersheet,
  IPayData,
  TSetState,
} from '../../types';

interface IProps {
  setOrdersheet: TSetState<IOrdersheet>;
  setOrderData: TSetState<IOrderData>;
}
/**
 * 주문정보 변경하기
 *
 * 배송주소, 캐시, 결제방법 변경
 */
export function useOrderCommands({ setOrdersheet, setOrderData }: IProps) {
  const changeAddress = (address: IAddress) => {
    setOrdersheet((ordersheet) => ({ ...ordersheet, address }));
    setOrderData((data) => ({ ...data, addressId: address.id }));
  };

  useSubscriber('address', changeAddress);

  const changeUsedCash = (usedCash: number) =>
    setOrderData((data) => ({ ...data, usedCash }));

  const changePayMethod = (changed: IPayData) =>
    setOrderData((data) => ({ ...data, ...changed }));

  return { changeAddress, changeUsedCash, changePayMethod };
}
