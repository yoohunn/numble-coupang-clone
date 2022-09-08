import { useState } from 'react';
import styled from '@emotion/styled';

export default function CartPage() {
  // 서버에서 카드 아이템 가져오기
  // const { cartItems } = useGetCart()

  // 클라이언트에서 이벤트를 받은 후 서버에 전달
  const [seletedItems, setSeletedItems] = useState();

  const select = (id: number) => {};
  const selectAll = () => {};

  const remove = (id: number) => {};
  const removeAll = () => {};

  return (
    <Grid>
      {/* Head */}
      {/* Order title='rocket'*/}
      {/*   title */}
      {/*   CartItems */}
      {/*   totalPrice */}
      {/* Order title='seller' */}
      {/* Foot */}
      {/* TotalOrder */}
    </Grid>
  );
}

const Grid = styled.div``;
