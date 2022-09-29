import type {
  IOrderData,
  TMobileCarrier,
  TOnChangePayMethod,
  TPayMethod,
} from '../../types';
import { Content, ContentSpan, CoupayStyles } from './styles/checkout';
import { Price } from '../global';
import { Radio } from '../common';

interface IProps {
  orderData: IOrderData;
  coupayMoney: number;
  onPayMethodChange: TOnChangePayMethod;
}

export default function PayMethodContent({
  orderData,
  coupayMoney,
  onPayMethodChange,
}: IProps) {
  const onChange = (payMethod: TPayMethod) =>
    onPayMethodChange({ payMethod, mobileCarrier: '' });

  const onSelect = (mobileCarrier: TMobileCarrier) =>
    onPayMethodChange({ ...orderData, mobileCarrier });

  return (
    <>
      <form
        name='payType'
        onChange={(e) => {
          onChange((e.target as HTMLInputElement).value as TPayMethod);
        }}
      >
        <Radio
          name='payMethod'
          value='coupaymoney'
          title='쿠페이 머니'
          defaultChecked
        />
        <Radio name='payMethod' value='mobile' title='휴대폰' />
      </form>
      <Content>
        <CoupayContent
          isActive={orderData.payMethod === 'coupaymoney'}
          coupayMoney={coupayMoney}
        />
        <MobileContent
          isActive={orderData.payMethod === 'mobile'}
          onSelect={onSelect}
        />
      </Content>
    </>
  );
}

//
interface ICoupayContent {
  isActive: boolean;
  coupayMoney: number;
}

const CoupayContent = ({ isActive, coupayMoney }: ICoupayContent) => {
  if (!isActive) return null;

  return (
    <CoupayStyles>
      <header>
        <ContentSpan>잔액</ContentSpan> <Price price={coupayMoney} />
      </header>
      <div>잔액이 부족할 경우, 결제 진행 시에 충전됩니다.</div>
    </CoupayStyles>
  );
};

interface IMoobileContent {
  isActive: boolean;
  onSelect: (mobileCarrier: TMobileCarrier) => void;
}

const MobileContent = ({ isActive, onSelect }: IMoobileContent) => {
  if (!isActive) return null;

  return (
    <>
      <ContentSpan>통신사 종류</ContentSpan>
      <select onChange={(e) => onSelect(e.target.value as TMobileCarrier)}>
        <option value=''>선택</option>
        <option value='skt'>SKT</option>
        <option value='kt'>KT</option>
        <option value='hello'>헬로모바일</option>
        <option value='kct'>KCT</option>
      </select>
    </>
  );
};
