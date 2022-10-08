import { useState } from 'react';

import { usePay, useOrderData, useAddressPopup } from '../../hooks';

import type { IAddress, IOrdersheet } from '../../types';
import { getOrderTotalPrice } from '../../utils';
import { H1, Section } from './styles/checkout';
import { CheckoutInfo, BuyerInfo, AddressInfo, PaymentButtons } from './index';

interface IProps {
  id: number;
  ordersheet: IOrdersheet;
}

export default function Ordersheet({ id, ordersheet }: IProps) {
  const [address, setAddress] = useState<IAddress>(ordersheet.address);

  const { open } = useAddressPopup(address.id, {
    onMessage: (message: IAddress) => setAddress(message),
  });

  const { buyer, coupangCash, coupayMoney, orderItems } = ordersheet;
  const { orderData, update } = useOrderData();

  const { pay } = usePay({
    ordersheetId: id,
    addressId: address.id,
    usedCoupaymoney: coupayMoney,
    ...orderData,
  });

  return (
    <Section>
      <H1>주문/결제</H1>
      <BuyerInfo info={buyer} />
      <AddressInfo info={address} onAddress={open} />
      <CheckoutInfo
        totalPrice={getOrderTotalPrice(orderItems || [])}
        coupayMoney={coupayMoney}
        coupangCash={coupangCash}
        orderData={orderData}
        onChange={update}
      />
      <PaymentButtons onPayment={pay} />
    </Section>
  );
}
