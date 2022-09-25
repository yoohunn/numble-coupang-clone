import { useState } from 'react';

import type { IOrderData, IOrdersheet } from '../../types';
import { getOrderTotalPrice } from '../../utils';
import { useOrderCommands, usePaymentCommands } from '../../hooks';

import { H1, Section } from './styles/checkout';
import { CheckoutInfo, BuyerInfo, AddressInfo, PaymentButtons } from './index';

interface IProps {
  id: number;
  ordersheet: IOrdersheet;
}

export default function Ordersheet(props: IProps) {
  const [ordersheet, setOrdersheet] = useState<IOrdersheet>(props.ordersheet);
  const { buyer, address, coupangCash, coupayMoney, orderItems } = ordersheet;

  const [orderData, setOrderData] = useState<IOrderData>({
    ordersheetId: props.id,
    addressId: address.id,
    usedCash: 0,
    payMethod: 'coupaymoney',
    usedCoupaymoney: 0,
  });

  const { changeUsedCash, changePayMethod } = useOrderCommands({
    setOrdersheet,
    setOrderData,
  });

  const { pay, payByRocket } = usePaymentCommands(orderData);

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
        usedCash={orderData.usedCash}
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
