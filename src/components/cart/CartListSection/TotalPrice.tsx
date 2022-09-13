import styled from '@emotion/styled';

interface IProps {
  price: ICartPrice;
}

const TotalPrice = ({ price }: IProps) => (
  <Box>
    <span>
      총 상품 가격
      <strong>{price.product.toLocaleString()}</strong>원
    </span>
    <Icon className='fa-solid fa-plus' />
    <span>
      총 배송비
      <strong>{price.shipping.toLocaleString()}</strong>원
    </span>
    <Icon className='fa-solid fa-equals' />
    <span>
      총 주문금액
      <Strong>{(price.product + price.shipping).toLocaleString()}원</Strong>
    </span>
  </Box>
);

export default TotalPrice;

const Icon = ({ className }: { className: string }) => (
  <IconBox>
    <i className={className}></i>
  </IconBox>
);

const Box = styled.div`
  font-size: 14px;
  text-align: center;
  border: 4px solid #c8c8c8;
  padding: 20px;
  margin-bottom: 60px;
  color: #555;

  & strong {
    padding: 0 4px 0 5px;
    font: 700 17px/17px tahoma;
    color: #111;
  }
`;

const Strong = styled.strong`
  color: #ea0000 !important;
`;
import { ICartPrice } from '../../../types/cart.types';

const IconBox = styled.span`
  display: inline-block;
  margin: 0 11px;
  line-height: 18px;
  text-align: center;
  font-size: 12px;
  width: 18px;
  height: 18px;
  border-radius: 1px;
  background-color: white;
  color: #666;
  border: 1px solid #b5b5b5;
`;
