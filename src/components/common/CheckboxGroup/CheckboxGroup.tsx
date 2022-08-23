import styled from '@emotion/styled';
import React, { ChangeEvent, useMemo, useState } from 'react';
import { UseFormRegister } from 'react-hook-form';

import Checkbox from '../Checkbox/Checkbox';
import { ICheck } from '../../../types/common.types';

interface IProps<T> {
  fields: ICheck<T>[];
  register: UseFormRegister<T>;
  linked?: { parent: string | string[]; child: string[] };
}

const CheckboxGroup = <T extends unknown>({
  fields,
  register,
  linked,
}: IProps<T>) => {
  const [isCheck, setIsCheck] = useState<string[]>([]);
  const isCheckAll = useMemo(() => fields.length === isCheck.length, [isCheck]);

  const selectAll = () => {
    isCheckAll //
      ? setIsCheck([])
      : setIsCheck(fields.map((i) => i.name));
  };

  const selectOne = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    console.log(name);

    checked
      ? setIsCheck([...isCheck, name])
      : setIsCheck(isCheck.filter((n) => n !== name));

    if (linked == null) return;

    const isCheckParent = linked.parent.includes(name);

    if (isCheckParent) {
      checked
        ? setIsCheck([...isCheck, ...linked.child, name])
        : setIsCheck(
            isCheck.filter((n) => n !== name && !linked.child.includes(n))
          );

      return;
    }
  };

  return (
    <Wrapper>
      <Checkbox
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
