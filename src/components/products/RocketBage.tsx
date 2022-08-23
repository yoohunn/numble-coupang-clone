import Image from 'next/image';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface IProps {
  type: 'ROCKET' | null;
}

const RocketBage = ({ type }: IProps) => {
  if (type === null) return null;

  return (
    <Wrapper>
      <Image
        src={
          'http://image10.coupangcdn.com/image/badges/rocket/rocket_logo.png'
        }
        alt='rocket delivery bage'
        width={56}
        height={14}
      />
    </Wrapper>
  );
};

export default RocketBage;

const Wrapper = styled.span`
  margin-left: 4px;
`;
