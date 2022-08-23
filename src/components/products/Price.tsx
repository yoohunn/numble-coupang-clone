import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface IProps {
  price: number;
  orignPrice?: number;
  discountRate?: number;
  unit: string;
  size?: Size;
}

type Size = 'sm' | 'md';

const Price = ({ price, orignPrice, discountRate, unit, size }: IProps) => {
  const PriceDetail = () => {
    if (size === 'sm') return null;

    return (
      <Wrapper>
        {`${discountRate}%`}
        <span>{`${orignPrice?.toLocaleString()}원`}</span>
      </Wrapper>
    );
  };

  return (
    <>
      <PriceDetail />
      <Strong size={size || 'md'}>
        {price.toLocaleString()}
        <span>{unit}</span>
      </Strong>
    </>
  );
};

export default Price;

const Strong = styled.strong<{ size?: Size }>`
  color: #ae0000;
  font-family: Tahoma;
  ${({ size }) => (size === 'sm' ? sm : md)}
`;

const md = css`
  font-size: 20px;
  line-height: 21px;

  span {
    font-size: 90%;
    margin-left: 2px;
  }
`;

const sm = css`
  font-size: 13px;
`;

const Wrapper = styled.div`
  font-size: 14px;
  margin-bottom: 2px;

  span {
    text-decoration: line-through;
    color: #888;
    margin-left: 3px;
  }
`;
