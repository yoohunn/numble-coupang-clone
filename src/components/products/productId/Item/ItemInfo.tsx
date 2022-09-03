import styled from '@emotion/styled';

import Title from '../../../common/Title/Title';
import Price from '../../Price';
import RocketBage from '../../RocketBage';
import StarRating from '../../StarRating';

import CountInput from './CountInput';
import InsuranceCheck from './InsuranceCheck';
import BlueLink from './BlueLink';
import Radio from './Radio';
import CartBtn from './CartBtn';
import BuyBtn from './BuyBtn';

interface IProps {}

const ItemInfo = ({}: IProps) => {
  return (
    <Wrapper>
      <Header>
        <BlueLink to='/apple' title='Apple' />
        <Title title='Apple 아이폰 13 mini 자급제' />
        <StarRating />
        <BlueLink to='/review' title='13,130개 상품평' />
      </Header>

      <PriceBox>
        <Price price={902200} orignPrice={950000} size='lg' />
        <RocketBage type='ROCKET' />
      </PriceBox>

      <ShippingBox>
        <p>무료배송</p>
        <Radio
          title='내일(목) 7/21'
          description='(23시간 57분 내 주문 시 / 서울⋅경기 기준)'
        />
        <Radio
          title='내일(수) 7/27 새벽 7시 전 '
          description='(오후 4시 30분 전 주문 시 / 서울⋅경기 기준)'
        />
      </ShippingBox>

      <InsuranceBox>
        <InsuranceCheck
          title='AppleCare+'
          price={179000}
          description='우발적인 손상에 대한 보상을 받아보세요.'
        />
      </InsuranceBox>

      <SubmitBox>
        <CountInput />
        <CartBtn />
        <BuyBtn />
      </SubmitBox>
    </Wrapper>
  );
};

export default ItemInfo;

const Wrapper = styled.div`
  min-width: 479px;

  & > div {
    border-bottom: 1px solid #eee;
  }
`;

const Header = styled.div`
  padding: 0 0 10px;
  border-bottom: 1px solid #ccc;
`;

const PriceBox = styled.div`
  padding: 17px 0px;
`;

const ShippingBox = styled.div`
  padding: 14px 0 4px 0;

  p {
    font-size: 12px;
    font-weight: bold;
  }
`;

const InsuranceBox = styled.div`
  padding: 16px 0px;
`;

const SubmitBox = styled.div`
  margin-top: 16px;
  padding-bottom: 16px;
  display: flex;
  align-items: center;
`;
