import { ChangeEvent, MouseEvent, useState } from 'react';

import { Price } from '../global';
import {
  Button,
  Inline,
  Input,
  LightSpan,
  RedSpan,
  Form,
  MessageBox,
} from './styles/checkout';

interface IProps {
  usedCash: number;
  coupangCash: number;
  onUsedCashChange: (usedCash: number) => void;
}

export default function CashContent({
  usedCash,
  coupangCash,
  onUsedCashChange,
}: IProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Inline>
        <Price price={-usedCash} />
      </Inline>
      보유:
      <Price price={coupangCash} />
      <Button pressed={open} onClick={() => setOpen((open) => !open)}>
        쿠팡캐시입력
      </Button>
      {open && (
        <CashForm
          coupangCash={coupangCash}
          onUsedCashChange={onUsedCashChange}
        />
      )}
    </>
  );
}

interface ICashForm {
  coupangCash: number;
  onUsedCashChange: (usedCash: number) => void;
}

const CashForm = ({ coupangCash, onUsedCashChange }: ICashForm) => {
  const [value, setValue] = useState('');

  const invalid = +value > coupangCash;

  const onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const checkNum = /[^0-9]/g;
    const value = e.target.value.replace(checkNum, '');
    setValue(value);
  };

  const onCheckChange = (e: MouseEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const value = target.checked ? coupangCash.toString() : '0';
    setValue(value);
  };

  const onSubmit = () => onUsedCashChange(+value);

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <Input placeholder='0' value={value} onChange={onValueChange} />
      <span> 원</span>
      <LightSpan>| </LightSpan>
      <input type='checkbox' onClick={onCheckChange} />
      <span>모두사용</span>
      <div>
        <Button colored disabled={invalid} type='submit'>
          쿠팡캐시적용
        </Button>
      </div>
      {invalid && <InvaidMessage />}
    </Form>
  );
};

const InvaidMessage = () => (
  <MessageBox>
    <RedSpan>❗️ 사용가능한 캐시를 초과 입력하였습니다.</RedSpan>
  </MessageBox>
);
