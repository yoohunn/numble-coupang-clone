import type { IAddress } from '../../types/checkout.types';
import { Button, Label } from '../common';
import { CardBox, Div, Flex, H3, LabelBox, P } from './styles/address';

interface IProps {
  address: IAddress;
  isPicked: boolean;
  onPick: (id: number, address: IAddress) => void;
}

export default function Card({ address, isPicked, onPick }: IProps) {
  const {
    id,
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
        <Button size='sm' colored onClick={() => onPick(id, address)}>
          선택
        </Button>
      </Flex>
    </CardBox>
  );
}
