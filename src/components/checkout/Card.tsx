import styled from '@emotion/styled';

import { IAddress } from '../../types/checkout.types';
import { Button, Label } from '../common';

interface IProps {
  address: IAddress;
  isPicked: boolean;
  onClickPicked: (address: IAddress) => void;
}

export default function Card({ address, isPicked, onClickPicked }: IProps) {
  const {
    receiver,
    base,
    detail,
    phoneNumber,
    isFreshAvailable,
    isWowAAvailable,
  } = address;

  return (
    <CardBox isPicked={isPicked}>
      <H3>{receiver}</H3>
      <LabelBox>
        {isFreshAvailable && <Label type='fresh' />}
        {isWowAAvailable && <Label type='wow' />}
      </LabelBox>
      <P>{base + ',' + detail}</P>
      <P>{phoneNumber}</P>
      <Div>일반: 문 앞 / 새벽: 문 앞 (자유 출입가능)</Div>
      <Flex>
        <Button size='sm'>수정</Button>
        <Button size='sm' colored onClick={() => onClickPicked(address)}>
          선택
        </Button>
      </Flex>
    </CardBox>
  );
}

const CardBox = styled.div<{ isPicked: boolean }>`
  padding: 15px;
  border: 1px solid #ccc;
  border: ${(props) =>
    props.isPicked ? '2px solid #0073e9' : '1px solid #ccc'};
`;

const H3 = styled.h3`
  font-size: 16px;
  font-weight: 700;
  margin: 0;
`;

const LabelBox = styled.div`
  margin: 9px 0 2px 0;
`;

const P = styled.p`
  margin-top: 4px;
`;

const Div = styled.div`
  margin: 8px 0 6px 0;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;
