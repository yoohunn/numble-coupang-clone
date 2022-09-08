import { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import { useGetCart } from '../../src/hooks/cart/useCart';
import { UserService } from '../../src/services';

export default function CartPage() {
  useEffect(() => {
    UserService.me();
  }, []);

  const cart = useGetCart();

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
      {/* title */}
      {/* CartItems */}
      {/* totalPrice */}
      {/* Order title='seller' */}
      {/* Foot */}
      {/* TotalOrder */}
    </Grid>
  );
}
const Grid = styled.div``;
