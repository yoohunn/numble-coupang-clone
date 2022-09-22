import { useState } from 'react';
import styled from '@emotion/styled';

import type { ICartItem } from '../../types';
import { useCartQuery, useCartCommands } from '../../hooks/cart';
import { Head, Order, Foot, TotalPrice, CartFallback } from './CartListSection';

interface IProps {
  cart: ICartItem[];
}

export default function CartList({ cart }: IProps) {
  const [selectedIds, setSeletedIds] = useState<number[]>([]);
  const {
    initCart,
    onRemove,
    onRemoveSelected,
    onChangeQuantity,
    onSelect,
    onSelectAll,
    isSelected,
    isSelectedAll,
  } = useCartCommands(cart, selectedIds, setSeletedIds);

  const { rocketItems, sellerItems, rocketPrice, sellerPrice, totalPrice } =
    useCartQuery(cart, selectedIds);

  if (cart.length === 0) return <CartFallback isUser={true} />;

  return (
    <Grid>
      <button onClick={initCart}>init</button>

      <Head isSelectedAll={isSelectedAll} onSelectAll={onSelectAll} />
      <Order
        type='rocket'
        items={rocketItems}
        price={rocketPrice}
        isSelected={isSelected}
        onSelect={onSelect}
        onRemove={onRemove}
        onChangeQuantity={onChangeQuantity}
      />
      <Order
        type='seller'
        items={sellerItems}
        price={sellerPrice}
        isSelected={isSelected}
        onSelect={onSelect}
        onRemove={onRemove}
        onChangeQuantity={onChangeQuantity}
      />
      <Foot
        count={selectedIds.length}
        isSelectedAll={isSelectedAll}
        onSelectAll={onSelectAll}
        onRemoveSelected={onRemoveSelected}
      />
      <TotalPrice price={totalPrice} />
    </Grid>
  );
}

const Grid = styled.div`
  margin: 20px auto;
  width: 900px;
  font-family: Dotum, \B3CB움, sans-serif;
  font-size: 12px;
`;
