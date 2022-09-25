import type { GetServerSideProps } from 'next';

import type { IOrdersheet } from '../../src/types';
import { CheckoutService } from '../../src/services';
import { parseCookie, parseQuery } from '../../src/utils';

import { AuthCheck, CoupangHead } from '../../src/components/global';
import { LogoHeader, Ordersheet } from '../../src/components/checkout';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const accessToken = parseCookie(context.req.headers.cookie);
  const id = parseQuery(context.query.id);

  const ordersheet = accessToken
    ? await CheckoutService.getOrdersheet(id, accessToken)
    : [];

  return {
    props: { id, ordersheet },
  };
};

interface IProps {
  id: number;
  ordersheet: IOrdersheet;
}

export default function CheckoutPage({ id, ordersheet }: IProps) {
  return (
    <AuthCheck>
      <>
        <CoupangHead title='COLOR OF YOUR DAYS!' />

        <LogoHeader />
        <Ordersheet id={id} ordersheet={ordersheet} />
      </>
    </AuthCheck>
  );
}
