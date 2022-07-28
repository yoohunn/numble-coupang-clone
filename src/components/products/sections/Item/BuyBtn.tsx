import styled from '@emotion/styled';
import Link from 'next/link';

import { itemBtnStyle } from '../../../../../styles/reuse';

interface IProps {}

const BuyBtn = ({}: IProps) => {
  return (
    <Link href={'/buy'} passHref>
      <A> 바로구매 </A>
    </Link>
  );
};

export default BuyBtn;

const A = styled.a`
  ${itemBtnStyle}
  display: inline-block;
  background: #346aff;
  background-color: rgb(52, 106, 255);
  color: #fff;

  &:hover {
    background-color: #0f5ca8;
    border-color: #0f5ca8;
  }
`;
