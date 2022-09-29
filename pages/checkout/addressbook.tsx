import { useState } from 'react';
import { useRouter } from 'next/router';

import { useAddressQuery, useBroadcaster } from '../../src/hooks';

import type { IAddress } from '../../src/types';
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

  const { addresses } = useAddressQuery();

  const { postMessage } = useBroadcaster('address');

  const [pickedId, setPickedId] = useState<number>(+id);

  const changePickedId = (address: IAddress) => {
    setPickedId(address.id);
    postMessage(address);
    window.close();
  };

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
              onPick={changePickedId}
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
