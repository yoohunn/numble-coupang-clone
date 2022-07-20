import { useRouter } from 'next/router';
import styled from '@emotion/styled';

import Breadcrumble from '../../src/components/products/Breadcrumble';
import Item from '../../src/components/products/Item';
import OtherItems from '../../src/components/products/OtherItems';
import Details from '../../src/components/products/Details';
import useProductMock from '../../src/hooks/products/useProductMock';

export default function VendoritemPage() {
  const router = useRouter();
  const [item, details, breadcrumble, otherItems] = useProductMock();

  console.log(router.query.itemId, router.query.vendoritemId);

  return (
    <Main>
      <Breadcrumble breadcrumble={breadcrumble} />
      <Item item={item} />
      <OtherItems items={otherItems} />
      <Details details={details} />
    </Main>
  );
}

const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;

  & > section {
    width: 100%;
  }
`;
