import { useState } from 'react';
import type { ChangeEvent } from 'react';

import type { ICartContentProps, ICartItem } from '../../../types';
import { Box, H3, Flex, Left, Right, Span } from './CartItemContent.styles';

interface IProps extends ICartContentProps {
  item: ICartItem;
}

export default function CartItemContent({
  item,
  type,
  onRemove,
  onChangeQuantity,
}: IProps) {
  const { name, salePrice, expectedDeliveryDate: date } = item.product;

  // handle quantity
  const [quantity, setQuantity] = useState<number>(item.quantity);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const quantity = e.target.valueAsNumber;
    setQuantity(quantity);

    onChangeQuantity(item.id, quantity, {
      onError: () => setQuantity(item.quantity),
    });
  };

  return (
    <Box>
      <H3>{name}</H3>
      <Flex>
        <Left type={type}>
          <span>{getExpectedDate(date)} 도착 보장</span>
          (서울경기 기준)
        </Left>
        <Right>
          <Span>
            {salePrice.toLocaleString()}원
            <input type='number' min={1} value={quantity} onChange={onChange} />
          </Span>
          <span>
            {(salePrice * quantity).toLocaleString()}원
            <button onClick={() => onRemove(item.id)}>
              <i className='fa-regular fa-rectangle-xmark'></i>
            </button>
          </span>
        </Right>
      </Flex>
    </Box>
  );
}

const getExpectedDate = (date: string) => {
  const splited = date.split('-');
  return splited[1] + '/' + splited[2];
};
