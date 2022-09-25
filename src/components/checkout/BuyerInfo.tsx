import type { IBuyer } from '../../types';
import { H2, Table, Input, LightSpan, Button } from './styles/checkout';
import Row from './InfoRow';

interface IProps {
  info: IBuyer;
}

export default function BuyerInfo({ info }: IProps) {
  const { name, email, phoneNumber } = info;

  return (
    <>
      <H2>구매자정보</H2>
      <Table>
        <Row name='이름' content={name} />
        <Row name='이메일' content={email} />
        <Row
          name='휴대폰 번호'
          content={<PhoneNumberContent phoneNumber={phoneNumber} />}
        />
      </Table>
    </>
  );
}

//
const PhoneNumberContent = ({ phoneNumber }: { phoneNumber: string }) => (
  <>
    <Input type='text' defaultValue={phoneNumber} />
    <Button>수정</Button>
    <LightSpan>쿠폰/티켓정보는 구매한 분의 번호로 전송됩니다.</LightSpan>
    <p>
      * 인증 번호를 못 받았다면, 1577-7011 번호 차단 및 스팸 설정을 확인해
      주세요
    </p>
  </>
);
