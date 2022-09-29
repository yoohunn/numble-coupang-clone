import { useState } from 'react';

import {
  useSubscriber,
  useOrderCommands,
  usePaymentCommands,
} from '../../hooks';

import type { IAddress, IOrderData, IOrdersheet } from '../../types';
import { getOrderTotalPrice } from '../../utils';
import { H1, Section } from './styles/checkout';
import { CheckoutInfo, BuyerInfo, AddressInfo, PaymentButtons } from './index';

interface IProps {
  id: number;
  ordersheet: IOrdersheet;
}

export default function Ordersheet({ id, ordersheet }: IProps) {
  const { buyer, coupangCash, coupayMoney, orderItems } = ordersheet;

  // Query
  const [address, setAddress] = useState<IAddress>(ordersheet.address);

  const [orderData, setOrderData] = useState<IOrderData>({
    usedCash: 0,
    payMethod: 'coupaymoney',
  });

  const paymentData = {
    ordersheetId: id,
    addressId: address.id,
    usedCoupaymoney: coupayMoney,
    ...orderData,
  };

  // Commands
  useSubscriber('address', (message: IAddress) => setAddress(message));

  const { changeUsedCash, changePayMethod } = useOrderCommands(setOrderData);

  const { pay, payByRocket } = usePaymentCommands(paymentData);

  const openAddressWindow = () => {
    window.open(
      `addressbook?id=${address.id}`,
      '',
      '_blank, width=510, height=650'
    );
  };

  return (
    <Section>
      <H1>주문/결제</H1>
      <BuyerInfo info={buyer} />
      <AddressInfo info={address} onAddress={openAddressWindow} />
      <CheckoutInfo
        totalPrice={getOrderTotalPrice(orderItems || [])}
        coupayMoney={coupayMoney}
        coupangCash={coupangCash}
        orderData={orderData}
        onUsedCashChange={changeUsedCash}
        onPayMethodChange={changePayMethod}
      />
      <PaymentButtons //
        onPayment={pay}
        onRocketPayment={payByRocket}
      />
    </Section>
  );
}
