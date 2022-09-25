import { useState } from 'react';

import type { IPayData, TMobileCarrier, TPayMethod } from '../../types';
import { Content, ContentSpan, CoupayStyles } from './styles/checkout';
import { Price } from '../global';

interface IProps {
  coupayMoney: number;
  onPayMethodChange: (payData: IPayData) => void;
}

export default function PayMethodContent({
  coupayMoney,
  onPayMethodChange,
}: IProps) {
  const defaultPayData: IPayData = {
    payMethod: 'coupaymoney',
    usedCoupaymoney: 0,
    mobileCarrier: '',
  };

  const [payData, setPayData] = useState<IPayData>(defaultPayData);

  const onChange = (payMethod: TPayMethod) => {
    const changed = { ...defaultPayData, payMethod };
    setPayData(changed);
    onPayMethodChange(changed);
  };

  const onSelect = (mobileCarrier: TMobileCarrier) => {
    const selected = { ...payData, mobileCarrier };
    setPayData(selected);
    onPayMethodChange(selected);
  };

  return (
    <>
      <form
        name='payType'
        onChange={(e) => {
          onChange((e.target as HTMLInputElement).value as TPayMethod);
        }}
      >
        <Radio value='coupaymoney' title='쿠페이 머니' defaultChecked />
        <Radio value='mobile' title='휴대폰' />
      </form>
      <Content>
        <CoupayContent
          isActive={payData.payMethod === 'coupaymoney'}
          coupayMoney={coupayMoney}
        />
        <MobileContent
          isActive={payData.payMethod === 'mobile'}
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

//
interface IRadio {
  value: TPayMethod;
  title: string;
  defaultChecked?: boolean;
}

const Radio = ({ value, title, defaultChecked }: IRadio) => (
  <label>
    <input
      type='radio'
      name='payMethod'
      value={value}
      defaultChecked={defaultChecked}
    />
    {title}
  </label>
);
