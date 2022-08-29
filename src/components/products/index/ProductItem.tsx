import Link from 'next/link';
import styled from '@emotion/styled';

import type { IProductItem } from '../../../types/products.types';
import Price from '../Price';
import StarRating from '../StarRating';
import RocketBage from '../RocketBage';

interface IProps {
  item: IProductItem;
}

const ProductItem = ({ item }: IProps) => {
  const {
    id,
    name,
    imageUrl,
    rocketType,
    reviewCount,
    originalPrice,
    salePrice,
    shippinFee,
    expectedDeliveryDate,
    rating,
  } = item;

  return (
    <Li>
      <Link href={`/products/${id}`} passHref>
        <A>
          <ImgWrapper>
            <img src={imageUrl} alt='' />
          </ImgWrapper>

          <Name>{name}</Name>
          <Price price={salePrice} orignPrice={originalPrice} unit={'원'} />
          <RocketBage type={rocketType} />

          <DeliveryDate>오늘(일) 8/28 도착 보장</DeliveryDate>

          <StarRating average={rating} />
          <Count>{`(${reviewCount})`}</Count>
        </A>
      </Link>
    </Li>
  );
};

export default ProductItem;

const Li = styled.li`
  padding: 20px;
  border-bottom: 1px solid #ddd;

  &:hover p {
    color: #0073e9;
    text-decoration: underline;
  }
`;

const A = styled.a`
  display: block;
  width: 234px;
  height: 453px;
  padding: 10px;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  }
`;

const ImgWrapper = styled.div`
  & > img {
    width: 100%;
  }
`;

const Name = styled.p`
  margin-top: 38px;
  margin-bottom: 8px;
  line-height: 16px;
  font-size: 12px;
`;

const DeliveryDate = styled.span`
  display: inline-block;
  color: #00891a;
  font-size: 14px;
`;

const Count = styled.span`
  color: #888;
  font-size: 11px;
`;
