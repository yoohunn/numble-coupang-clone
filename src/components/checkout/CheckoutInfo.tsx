import type { ICartPrice, IOrderData, TOnChangePayMethod } from '../../types';
import { H2, Inline, RedSpan, Table } from './styles/checkout';
import { Price } from '../global';
import { Row, PayMethodContent, CashContent } from './index';

interface IProps {
  totalPrice: ICartPrice;
  coupayMoney: number;
  coupangCash: number;
  orderData: IOrderData;
  onUsedCashChange: (cash: number) => void;
  onPayMethodChange: TOnChangePayMethod;
}

export default function CheckoutInfo({
  totalPrice,
  coupayMoney,
  coupangCash,
  orderData,
  onUsedCashChange,
  onPayMethodChange,
}: IProps) {
  const { usedCash } = orderData;

  return (
    <>
      <H2>결제정보</H2>
      <Table>
        <Row name='총상품가격' content={<Price price={totalPrice.product} />} />
        <Row name='할인쿠폰' content={<CouponContent />} />
        <Row name='배송비' content={<Price price={0} />} />
        <Row
          name='쿠팡캐시'
          content={
            <CashContent
              usedCash={usedCash}
              coupangCash={coupangCash}
              onUsedCashChange={onUsedCashChange}
            />
          }
        />
        <Row
          name='총결제금액'
          content={<TotalPriceContent price={totalPrice} usedCash={usedCash} />}
        />

        <Row
          name='결제방법'
          content={
            <PayMethodContent
              orderData={orderData}
              coupayMoney={coupayMoney}
              onPayMethodChange={onPayMethodChange}
            />
          }
        />
      </Table>
    </>
  );
}

//
const CouponContent = () => (
  <>
    <Inline>
      <RedSpan>
        <Price price={0} />
      </RedSpan>
    </Inline>
    <span>적용 가능한 할인 쿠폰이 없습니다.</span>
  </>
);

const TotalPriceContent = ({
  price: { product, shipping },
  usedCash,
}: {
  price: ICartPrice;
  usedCash: number;
}) => (
  <>
    <Inline>
      <Price price={product + shipping - usedCash} />
    </Inline>
    캐시적립예정 1,123원
  </>
);
