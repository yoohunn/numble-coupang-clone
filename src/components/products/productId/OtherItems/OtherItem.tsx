import styled from '@emotion/styled';
import Image from 'next/image';

import Price from '../../Price';
import RocketBage from '../../RocketBage';
import StarRating from '../../StarRating';
import { otherItemLi } from '../../../../../styles/reuse';
import { IOtherItem } from '../../../../types/product.interface';

interface IProps {
  item: IOtherItem;
}

const OtherItem = ({ item }: IProps) => {
  const {
    itemId,
    imageUrl,
    title,
    salesPrice,
    badgeType,
    ratingCount,
    ratingAverage,
  } = item;

  return (
    <Li key={itemId}>
      <Image
        src={`https:${imageUrl}`}
        alt='Other Item Image'
        width={160}
        height={160}
        layout='fixed'
      />

      <p>{title}</p>

      <div>
        <Price size='sm' price={salesPrice} unit='원' />
        <RocketBage type={badgeType} />
      </div>

      <div>
        <StarRating average={ratingAverage} />
        <ReviewCount>{`(${ratingCount})`}</ReviewCount>
      </div>
    </Li>
  );
};

export default OtherItem;

const Li = styled.li`
  ${otherItemLi}

  & > p {
    display: block;
    padding: 12px 0 7px 0;
    font-size: 12px;
    color: #111;
    font-weight: normal;
    text-overflow: ellipsis;
    line-height: 1.2;
  }

  & > div {
    display: flex;
    align-items: center;
  }
`;

const ReviewCount = styled.span`
  line-height: 1;
  margin-left: 4px;
  font-family: Tahoma;
  font-weight: 400;
  font-size: 12px;
  color: #888;
`;
