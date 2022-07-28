import { useRouter } from 'next/router';
import styled from '@emotion/styled';

import useProductMock from '../../src/hooks/products/useProductMock';
import Metatags from '../../src/components/products/MetaTage';
import Breadcrumble from '../../src/components/products/sections/Breadcrumble/Breadcrumble';
import Item from '../../src/components/products/sections/Item/Item';
import OtherItems from '../../src/components/products/sections/OtherItems/OtherItems';
import Details from '../../src/components/products/sections/Details/Details';

export default function VendoritemPage() {
  const router = useRouter();
  const { itemId, vendoritemid } = router.query;

  const { item, details, breadcrumble, otherItems } = useProductMock({});

  return (
    <Main>
      <Metatags title={item?.itemName} url={item?.images[0].thumbnailImage} />

      <Breadcrumble breadcrumble={breadcrumble} />
      <Item item={item} />
      <OtherItems otherItems={otherItems} />
      <Details details={details} />
    </Main>
  );
}

const Main = styled.main`
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;

  & > section {
    display: flex;
    width: 980px;
    margin: 0 auto;
  }
`;
