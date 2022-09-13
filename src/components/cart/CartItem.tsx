import Image from 'next/image';
import styled from '@emotion/styled';

import type { ICartItem, ICartItemProps, TCartType } from '../../types';

import RocketBage from '../products/RocketBage';
import { SelectItem, CartItemContent as Content } from './OrderSection';

interface IProps extends ICartItemProps {
  item: ICartItem;
}

export default function CartItem({
  item,
  type,
  isSelected,
  onSelect,
  onRemove,
  onChangeQuantity,
}: IProps) {
  const { imageUrl, salePrice, shippinFee } = item.product;

  return (
    <Li>
      <SelectItem id={item.id} onSelect={onSelect} isSelected={isSelected} />
      <ItemImage url={imageUrl} />
      <Content
        type={type}
        item={item}
        onRemove={onRemove}
        onChangeQuantity={onChangeQuantity}
      />
      <ItemPrice price={salePrice * item.quantity} type={type} />
      {type === 'seller' && <ShippingPrice price={shippinFee} />}
    </Li>
  );
}

// components
const ItemImage = ({ url }: { url: string }) => (
  <div>
    <Image src={url} width={78} height={78} layout='fixed' />
  </div>
);

const ItemPrice = ({ price, type }: { price: number; type: TCartType }) => (
  <Div>
    {price.toLocaleString()}원
    {type === 'rocket' && <RocketBage type='ROCKET' />}
  </Div>
);

const ShippingPrice = ({ price }: { price: number }) => (
  <Div>{price === 0 ? '무료' : `${price.toLocaleString()}원`}</Div>
);

// styles
const Li = styled.li`
  height: 120px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ddd;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 120px;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-left: 1px solid #ddd;
  color: #666;
`;
