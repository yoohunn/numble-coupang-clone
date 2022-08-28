import styled from '@emotion/styled';

import type { TRocket } from '../../types/products.types';

interface IProps {
  type: TRocket;
}

const RocketBage = ({ type }: IProps) => {
  if (type === null) return null;

  const rocketURL = {
    fresh:
      'http://image7.coupangcdn.com/image/mobile_app/v3/brandsdp/loyalty/pc/rocket-fresh@2x.png',
    ROCKET: 'http://image10.coupangcdn.com/image/badges/rocket/rocket_logo.png',
  };

  return (
    <Span>
      <img src={rocketURL[type]} alt='rocket bage' />
    </Span>
  );
};

export default RocketBage;

const Span = styled.span`
  margin-left: 4px;
  display: inline-block;
  width: 56px;

  & > img {
    width: 100%;
  }
`;
