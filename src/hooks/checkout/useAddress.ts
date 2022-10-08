import type { IAddress } from '../../types';
import { CheckoutService } from '../../services';
import { useQueryData } from '../useRequest';

export function useAddress() {
  const addresses = useQueryData<IAddress[]>(['address'], () =>
    CheckoutService.getAddress()
  );

  return { addresses };
}
