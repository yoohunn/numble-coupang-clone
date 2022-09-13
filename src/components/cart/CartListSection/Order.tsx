import styled from '@emotion/styled';

import type { ICartItem, ICartItemProps, ICartPrice } from '../../../types';

import { Title, OrderPrice } from '../OrderSection';
import CartItem from '../CartItem';
import ShippingPrice from './ShippingPrice';

interface IProps extends ICartItemProps {
  items: ICartItem[];
  price: ICartPrice;
}

const Order = ({
  type,
  items,
  price,
  isSelected,
  onSelect,
  onRemove,
  onChangeQuantity,
}: IProps) => {
  if (items.length === 0) return null;

  return (
    <section>
      <Title type={type} />
      <Content>
        <Ul>
          {items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              type={type}
              isSelected={isSelected}
              onSelect={onSelect}
              onRemove={onRemove}
              onChangeQuantity={onChangeQuantity}
            />
          ))}
        </Ul>
        {type === 'rocket' && <ShippingPrice price='무료' />}
      </Content>
      <OrderPrice price={price} />
    </section>
  );
};

export default Order;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #ddd;
  font-size: 12px;
`;

const Ul = styled.ul`
  width: 100%;
`;
