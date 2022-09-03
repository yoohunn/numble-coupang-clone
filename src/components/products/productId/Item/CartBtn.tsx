import styled from '@emotion/styled';

import { itemWhiteBtnStyle } from '../../../../../styles/reuse';

interface IProps {}

const CartBtn = ({}: IProps) => {
  return <Button type='submit'>장바구니 담기</Button>;
};

export default CartBtn;

const Button = styled.button`
  ${itemWhiteBtnStyle}
`;
