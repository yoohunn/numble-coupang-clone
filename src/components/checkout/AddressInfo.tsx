import type { IAddress } from '../../types';
import { Label } from '../common';
import { H2, LabelBox, Table, Button } from './styles/checkout';
import Row from './InfoRow';

interface IProps {
  info: IAddress;
  onAddress: () => void;
}

export default function AddressInfo({ info, onAddress }: IProps) {
  const {
    receiver,
    isFreshAvailable,
    isWowAAvailable,
    base,
    detail,
    phoneNumber,
  } = info;

  return (
    <>
      <H2>
        받는사람정보 <Button onClick={onAddress}>배송지변경</Button>
      </H2>
      <Table>
        <Row
          name='이름'
          content={
            <>
              {receiver}
              <LabelBox>
                {isFreshAvailable && <Label type='fresh' />}
                {isWowAAvailable && <Label type='wow' />}
              </LabelBox>
            </>
          }
        ></Row>
        <Row name='배송주소' content={base + detail} />
        <Row name='연락처' content={phoneNumber} />
        <Row
          name='📌 배송 요청사항'
          content={
            <p>
              문 앞 <Button>변경</Button>
            </p>
          }
        />
      </Table>
    </>
  );
}
