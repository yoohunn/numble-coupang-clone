import Image from 'next/image';
import styled from '@emotion/styled';

import { TRocket } from '../../types/products.types';

interface IProps {
  type: TRocket;
}

const RocketBage = ({ type }: IProps) => {
  if (type === null) return null;

  const src =
    type === 'fresh'
      ? 'https://image7.coupangcdn.com/image/mobile_app/v3/brandsdp/loyalty/pc/rocket-fresh@2x.png'
      : 'http://image10.coupangcdn.com/image/badges/rocket/rocket_logo.png';

  return (
    <Wrapper>
      <Image src={src} alt='rocket delivery bage' width={56} height={14} />
    </Wrapper>
  );
};

export default RocketBage;

const Wrapper = styled.span`
  margin-left: 4px;
`;
