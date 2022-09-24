import { Button, H2, Inline, RedSpan, Table } from './styles.checkout';
import Row from './InfoRow';

interface IProps {
  totalPrice: { product: number; shipping: number };
  coupons: any[];
  coupangCash: number;
}

export default function CheckoutInfo({ totalPrice, coupangCash }: IProps) {
  const { product, shipping } = totalPrice;

  return (
    <>
      <H2>결제정보</H2>
      <Table>
        <Row name='총상품가격' content={<Price price={product} />}></Row>
        <Row
          name='할인쿠폰'
          content={
            <>
              <Inline>
                <RedSpan>
                  <Price price={0} />
                </RedSpan>
              </Inline>
              <span>적용 가능한 할인 쿠폰이 없습니다.</span>
            </>
          }
        />
        <Row name='배송비' content={<Price price={0} />} />
        <Row
          name='쿠팡캐시'
          content={
            <>
              <Inline>
                <Price price={0} />
              </Inline>
              보유:
              <Price price={coupangCash} />
              <Button>쿠팡캐시입력</Button>
            </>
          }
        />
        <Row
          name='총결제금액'
          content={
            <>
              <Inline>
                <Price price={product + shipping} />
              </Inline>
              캐시적립예정 1,123원
            </>
          }
        />

        <Row
          name='결제방법'
          content={
            <>
              <label>
                <input type='radio' />
                쿠페이 머니
              </label>
              <label>
                <input type='radio' />
                휴대폰
              </label>
            </>
          }
        />
      </Table>
    </>
  );
}

const Price = ({ price }: { price: string | number }) => (
  <span>
    <strong>{price.toLocaleString()}</strong>원
  </span>
);
