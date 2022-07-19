import { useRouter } from 'next/router';
import styled from '@emotion/styled';

import Breadcrumble from './components/Breadcrumble';
import Item from './components/Item';
import OtherItems from './components/OtherItems';
import Details from './components/Details';
import useProductMock from './useProductMock';

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
