import { useState } from 'react';
import styled from '@emotion/styled';

import type { IAddress } from '../../src/types/checkout.types';
import { useQueryData } from '../../src/hooks/useRequest';
import { CheckoutService } from '../../src/services';

import { CoupangHead } from '../../src/components/global';
import { Card } from '../../src/components/checkout';
import { Button } from '../../src/components/common';

export default function Addressbook() {
  const addresses = useQueryData<IAddress[]>(['address'], () =>
    CheckoutService.getAddress()
  );

  const [picked, setPicked] = useState(1);

  const changePicked = (address: IAddress) => {
    setPicked(address.id);
    // postMessage(address)
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
              isPicked={address.id === picked}
              onClickPicked={changePicked}
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

const Header = styled.header`
  width: 100%;
  margin: auto;
  border: 0;
  padding: 9px 0;
  color: #111;
  line-height: 22px;
  text-align: center;
  border: 1px solid #ccc;
`;

const H3 = styled.h3`
  font-size: 16px;
  font-weight: 700;
  margin: 0;
`;

const Body = styled.div`
  margin: auto;
  min-width: 300px;
  max-width: 460px;
  padding: 10px 10px 30px;
  font-size: 15px;
  line-height: 19px;
  font-family: apple sd gothic neo, malgun gothic, nanumbarungothic, nanumgothic,
    dotum, sans-serif;
`;

const Cards = styled.div`
  margin-bottom: 10px;
`;
