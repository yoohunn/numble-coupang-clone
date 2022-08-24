import styled from '@emotion/styled';

import OtherItem from './OtherItem';
import BrandshopLink from './BrandshopLink';
import Title from '../../../common/Title/Title';
import { IOtherItems } from '../../../../types/product.interface';

interface IProps {
  otherItems?: IOtherItems;
}

const OtherItems = ({ otherItems }: IProps) => {
  if (!otherItems) return <p>로딩중</p>;

  const {
    items,
    brandName,
    brandShopLink,
    claimText,
    logoImageUrl,
    itemTotal,
  } = otherItems;

  return (
    <Section>
      <Title title={`${brandName}의 다른 상품들`} />
      <ul>
        {items //
          .slice(0, 4)
          .map((item) => (
            <OtherItem item={item} />
          ))}
        <BrandshopLink
          link={brandShopLink}
          claimText={claimText}
          logoImageUrl={logoImageUrl}
          itemTotal={itemTotal}
        />
      </ul>
    </Section>
  );
};

export default OtherItems;

const Section = styled.section`
  flex-direction: column;
  padding-bottom: 50px;

  & > h1 {
    padding: 40px 0 30px 0;
  }

  & > ul {
    display: flex;
  }
`;
