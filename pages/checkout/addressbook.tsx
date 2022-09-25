import { useState } from 'react';
import { useRouter } from 'next/router';

import { useAddressQuery, usePickedIdCommands } from '../../src/hooks';

import { CoupangHead } from '../../src/components/global';
import { Card } from '../../src/components/checkout';
import { Button } from '../../src/components/common';
import {
  Header,
  H3,
  Body,
  Cards,
} from '../../src/components/checkout/styles/address';

export default function Addressbook() {
  const { id } = useRouter().query;
  
  if (!id) return null;

  const [pickedId, setPickedId] = useState(+id);
  const { changePicked } = usePickedIdCommands(setPickedId);

  const { addresses } = useAddressQuery();

  return (
    <>
      <CoupangHead title='배송지 선택' />

      <Header>
        <H3>배송지 선택</H3>
      </Header>
      <Body>
        <Cards>
          {addresses?.map((address) => (
            <Card
              key={address.id}
              isPicked={address.id === pickedId}
              onPick={changePicked}
              address={address}
            />
          ))}
        </Cards>
        <NewAddressBtn />
      </Body>
    </>
  );
}

const NewAddressBtn = () => (
  <Button>
    <i className='fa-solid fa-plus'></i>
    배송지 추가
  </Button>
);
