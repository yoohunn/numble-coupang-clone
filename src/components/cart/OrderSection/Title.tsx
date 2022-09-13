import styled from '@emotion/styled';
import type { TCartType } from '../../../types';

interface IProps {
  type: TCartType;
}

const Title = ({ type }: IProps) => {
  const isRocket = type === 'rocket';

  return (
    <Box>
      <h3>{isRocket ? '로켓배송 상품' : '판매자배송 상품'}</h3>
      {isRocket && <RocketInfo />}
    </Box>
  );
};

export default Title;

const RocketInfo = () => (
  <span>
    <Span>무료배송</Span>
    (19,800원 이상 구매가능)
  </span>
);

const Box = styled.div`
  padding: 26px 22px 24px;
  font-size: 12px;
  color: #555;

  & > h3 {
    margin: 0;
    display: inline-block;
    line-height: 16px;
    font-weight: 700;
    font-size: 16px;
    color: #111;
  }
`;

const Span = styled.span`
  margin-left: 10px;
  margin-right: 4px;
  font-weight: 600;
  color: #111;
`;
