import React, { ChangeEvent, useState } from 'react';
import styled from '@emotion/styled';
import { UseFormRegister } from 'react-hook-form';

import Checkbox from '../Checkbox/Checkbox';

import {
  ICheck,
  checkParent,
  checkChild,
  SignupForm,
} from '../../../../pages/auth/signup/fields';

interface ICheckboxGroup {
  fields: ICheck[];
  register: UseFormRegister<SignupForm>;
}

const CheckboxGroup = ({ fields, register }: ICheckboxGroup) => {
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState<string[]>([]);

  const selectAll = () => {
    setIsCheckAll(!isCheckAll);
    isCheckAll //
      ? setIsCheck([])
      : setIsCheck(fields.map((i) => i.name));
  };

  const selectOne = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    const isCheckParent = checkParent.includes(name);

    isCheckAll && setIsCheckAll(false);

    if (isCheckParent) {
      checked
        ? setIsCheck([...isCheck, ...checkChild, name])
        : setIsCheck(
            isCheck.filter((n) => n !== name && !checkChild.includes(n))
          );

      return;
    }

    checked
      ? setIsCheck([...isCheck, name])
      : setIsCheck(isCheck.filter((n) => n !== name));
  };

  return (
    <Wrapper>
      <Checkbox
        {...register('agreeAll')}
        title='모두 동의합니다.'
        onChange={selectAll}
        checked={isCheckAll}
        bold
      />
      <p>
        동의에는 필수 및 선택 목적(광고성 정보 수신 포함)에 대한 동의가 포함되어
        있으며, 선택 목적의 동의를 거부하시는 경우에도 서비스 이용이 가능합니다.{' '}
      </p>
      <ul>
        {fields.map((i, index) => (
          <li key={index}>
            <Checkbox
              {...register(i.name)}
              title={i.title}
              description={i.description}
              isChild={i.isChild}
              required={i.required}
              checked={isCheck.includes(i.name)}
              onChange={selectOne}
            />
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default CheckboxGroup;

const Wrapper = styled.div`
  p {
    margin: 0;
    font-size: 12px;
    line-height: 1.4;
    color: #555;
    margin-left: 26px;
    margin-bottom: 16px;
    display: block;
  }
  ul {
    padding: 18px 16px;
    border: 1px solid #ccc;
    margin: 16px 0 32px 0;
  }
`;
