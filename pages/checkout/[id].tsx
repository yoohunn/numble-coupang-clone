import styled from '@emotion/styled';
import type { GetServerSideProps } from 'next';

import type { IOrdersheet } from '../../src/types/checkout.types';
import { CheckoutService } from '../../src/services';
import { getOrderTotalPrice, parseCookie, parseInt } from '../../src/utils';
import { AuthCheck, CoupangHead } from '../../src/components/global';
import {
  LogoHeader,
  CheckoutInfo,
  BuyerInfo,
  AddressInfo,
  PaymentButtons,
} from '../../src/components/checkout';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const accessToken = parseCookie(context.req.headers.cookie);
  const id = parseInt(context.query.id);

  const ordersheet = await CheckoutService.getOrdersheet(id, accessToken);

  return {
    props: { ordersheet },
  };
};

interface IProps {
  ordersheet: IOrdersheet;
}

export default function CheckoutPage({ ordersheet }: IProps) {
  const { buyer, address, coupangCash, coupons, orderItems } = ordersheet;

  const openAddressbook = () => {
    window.open('addressbook', '', '_blank, width=510, height=650');
  };

  const pay = () => {};
  const payByRocket = () => {};

  return (
    <AuthCheck>
      <>
        <CoupangHead title='COLOR OF YOUR DAYS!' />

        <LogoHeader />
        <Section>
          <H1>주문/결제</H1>
          <BuyerInfo info={buyer} />
          <AddressInfo info={address} onAddressClick={openAddressbook} />
          <CheckoutInfo
            totalPrice={getOrderTotalPrice(orderItems)}
            coupangCash={coupangCash}
            coupons={coupons}
          />
          <PaymentButtons //
            onPayment={pay}
            onRocketPayment={payByRocket}
          />
        </Section>
      </>
    </AuthCheck>
  );
}

const Section = styled.section`
  padding-left: 10px;
  width: 1020px;
  margin: 0 auto 20px;
`;

const H1 = styled.h1`
  margin-top: 5px;
  padding-left: 0;
  line-height: 70px;
  font-size: 30px;
  color: #111;
  border-bottom: 3px solid #777;
`;
