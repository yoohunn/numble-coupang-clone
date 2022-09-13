import styled from '@emotion/styled';
import { ICartPrice } from '../../../types';

interface IProps {
  price: ICartPrice;
}

const OrderPrice = ({ price }: IProps) => {
  const { product, shipping } = price;

  return (
    <Box>
      <span>
        상품가격 <Strong>{product.toLocaleString()}</Strong>원
      </span>
      <Icon className='fa-solid fa-plus' />
      <span>
        배송비
        {shipping === 0 ? (
          <strong> 무료</strong>
        ) : (
          <Strong>{shipping.toLocaleString()}</Strong>
        )}
      </span>
      <Icon className='fa-solid fa-equals' />
      <span>
        주문금액{' '}
        <TotalStrong>{(product + shipping).toLocaleString()}</TotalStrong>원
      </span>
    </Box>
  );
};

export default OrderPrice;

const Icon = ({ className }: { className: string }) => (
  <IconBox>
    <i className={className}></i>
  </IconBox>
);

const Box = styled.div`
  padding: 20px 35px 16px 0;
  background: #f7f7f7;
  font-size: 12px;
  line-height: 29px;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  margin-left: auto;
  text-align: right;
`;

const Strong = styled.strong`
  font: normal 15px/15px tahoma;
  margin-left: 1.5px;
`;

const TotalStrong = styled.strong`
  font: normal 15px/15px tahoma;
  font-weight: 600;
  margin-left: 1.5px;
`;

const IconBox = styled.span`
  display: inline-block;
  margin: 0 10px;
  line-height: 16.5px;
  text-align: center;
  font-size: 10px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #b5b5b5;
  color: white;
`;
