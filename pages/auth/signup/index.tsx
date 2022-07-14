import { ChangeEvent, ComponentProps, useEffect } from 'react';
import styled from '@emotion/styled';
import { useState } from 'react';
import {
  useForm,
  SubmitHandler,
  FieldValues,
  Path,
  RegisterOptions,
} from 'react-hook-form';

import { checks, FieldValue, inputs, checkParent, checkChild } from './fields';
import AuthLayout from '../layout';
import Button from '../../../src/components/common/Button/Button';
import Checkbox from '../../../src/components/common/Checkbox/Checkbox';
import Input from '../../../src/components/common/Input/Input';

export default function SignupPage() {
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState<string[]>([]);

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm<FieldValue>({
    mode: 'onChange',
  });
  const password = watch('password');

  const validation: { [name in Path<FieldValue>]?: RegisterOptions } = {
    email: {
      required: '아이디를 입력해주세요.',
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
        message: '아이디(이메일)는 이메일 형식으로 입력해주세요.',
      },
    },
    password: {
      required: '비밀번호를 입력해주세요.',
      minLength: {
        value: 8,
        message: '비밀번호는 8자 이상이여야 합니다.',
      },
      pattern: {
        value: /(?=.*\d)(?=.*[a-z]).{8,}/,
        message: '영문/숫자/특수문자 2가지 이상 조합 (8~20자)',
      },
    },
    passwordCheck: {
      required: '확인을 위해 새 비밀번호를 다시 입력해주세요.',
      validate: (value) =>
        password === value || '비밀번호가 동일하지 않습니다.',
    },
    name: {
      required: '이름을 정확히 입력하세요.',
    },
    phoneNumber: {
      required: '휴대폰 번호를 정확하게 입력하세요.',
    },
  };

  const pwValidations = [
    {
      type: 'pattern',
      invalid: errors.password?.type === 'pattern',
      message: '영문/숫자/특수문자 2가지 이상 조합 (8~20자)',
    },
    {
      type: 'minLength',
      invalid: errors.password?.type === 'minLength',
      message: '비밀번호는 8자 이상이여야 합니다.',
    },
  ];

  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data); //

  const handleCheckAll = () => {
    setIsCheckAll(!isCheckAll);
    isCheckAll //
      ? setIsCheck([])
      : setIsCheck(checks.map((i) => i.name));
  };

  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
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
    <AuthLayout title='회원가입'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <h1>회원정보를 입력해주세요</h1>
          {inputs.map((i, index) => (
            <li key={index}>
              <Input
                {...register(i.name, validation[i.name])}
                icon={i.icon}
                type={i.type}
                placeholder={i.placeholder}
                message={errors[i.name]?.message}
                isValid={
                  touchedFields[i.name] && !errors[i.name] ? true : false
                }
                validations={
                  i.name === 'password' && touchedFields.password
                    ? pwValidations
                    : undefined
                }
              />
            </li>
          ))}
        </InputGroup>
        <CheckGroup>
          <h1>쿠팡 서비스약관에 동의해주세요 </h1>
          <Checkbox
            {...register('agreeAll')}
            title='모두 동의합니다.'
            onChange={handleCheckAll}
            checked={isCheckAll}
            bold
          />
          <p>
            동의에는 필수 및 선택 목적(광고성 정보 수신 포함)에 대한 동의가
            포함되어 있으며, 선택 목적의 동의를 거부하시는 경우에도 서비스
            이용이 가능합니다.{' '}
          </p>
          <ul>
            {checks.map((i, index) => (
              <li key={index}>
                <Checkbox
                  {...register(i.name)}
                  title={i.title}
                  description={i.description}
                  required={i.required}
                  isChild={i.isChild}
                  onChange={handleCheck}
                  checked={isCheck.includes(i.name)}
                />
              </li>
            ))}
          </ul>
        </CheckGroup>
        <Button title='동의하고 가입하기' type='submit' colored />
      </form>
    </AuthLayout>
  );
}

const InputGroup = styled.section`
  h1 {
    padding: 20px 0 10px 0;
    margin: 0;
    font-size: 14px;
    font-weight: bold;
    line-height: 1.29;
    color: #111;
  }
`;

const CheckGroup = styled.section`
  margin-top: 20px;
  border-top: 1px solid #f1f4f6;

  h1 {
    padding: 20px 0 17px 0;
    margin: 0;
    font-size: 14px;
    font-weight: bold;
    line-height: 1.29;
    color: #111;
  }

  & > p {
    margin: 0;
    font-size: 12px;
    line-height: 1.4;
    color: #555;
    margin-left: 26px;
    margin-bottom: 16px;
    display: block;
  }

  & > ul {
    padding: 18px 16px;
    border: 1px solid #ccc;
    margin: 16px 0 32px 0;
  }
`;
