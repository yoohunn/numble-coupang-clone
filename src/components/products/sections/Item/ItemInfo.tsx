import styled from '@emotion/styled';

import Title from '../../../common/Title/Title';
import BlueLink from './BlueLink';
import CountInput from './CountInput';
import InsuranceCheck from './InsuranceCheck';
import Price from '../../Price';
import Radio from './Radio';
import RocketBage from '../../RocketBage';
import StarRating from '../../StarRating';
import CartBtn from './CartBtn';
import BuyBtn from './BuyBtn';

interface IProps {}

const ItemInfo = ({}: IProps) => {
  return (
    <Wrapper>
      <div className='info-title'>
        <BlueLink to='/apple' title='Apple' />
        <Title title='Apple 아이폰 13 mini 자급제' />
        <StarRating />
        <BlueLink to='/review' title='13,130개 상품평' />
      </div>

      <div className='info-price'>
        <Price
          price={902200}
          orignPrice={950000}
          discountRate={5}
          unit={'원'}
        />
        <RocketBage type='ROCKET' />
      </div>

      <div className='info-shipping'>
        <p>무료배송</p>
        <Radio
          title='내일(목) 7/21'
          description='(23시간 57분 내 주문 시 / 서울⋅경기 기준)'
        />
        <Radio
          title='내일(수) 7/27 새벽 7시 전 '
          description='(오후 4시 30분 전 주문 시 / 서울⋅경기 기준)'
        />
      </div>

      <div className='info-insurance'>
        <InsuranceCheck
          title='AppleCare+'
          price={179000}
          description='우발적인 손상에 대한 보상을 받아보세요.'
        />
      </div>

      <div className='info-submit'>
        <CountInput />
        <CartBtn />
        <BuyBtn />
      </div>
    </Wrapper>
  );
};

export default ItemInfo;

const Wrapper = styled.div`
  min-width: 479px;

  & > div {
    border-bottom: 1px solid #eee;
  }

  .info-title {
    padding: 0 0 10px;
    border-bottom: 1px solid #ccc;
  }

  .info-price {
    padding: 17px 0px;
  }

  .info-shipping {
    padding: 14px 0 4px 0;

    p {
      font-size: 12px;
      font-weight: bold;
    }
  }

  .info-insurance {
    padding: 16px 0px;
  }

  .info-submit {
    margin-top: 16px;
    padding-bottom: 16px;
    display: flex;
    align-items: center;
  }
`;
