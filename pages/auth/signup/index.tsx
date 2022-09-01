import styled from '@emotion/styled';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';

import useSignupFields from '../../../src/hooks/signup/useSignupFields';
import AuthLayout from '../../../src/components/layout/auth.layout';
import Button from '../../../src/components/common/Button/Button';
import Input from '../../../src/components/common/Input/Input';
import CheckboxGroup from '../../../src/components/common/CheckboxGroup/CheckboxGroup';
import useSignupValidation from '../../../src/hooks/signup/useSignupValidation';
import { SignupForm } from '../../../src/types/signup.types';

export default function SignupPage() {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm({
    mode: 'onChange',
  });

  const password = watch('password');

  const { validationRules, validationStatus } = useSignupValidation(
    errors,
    password
  );
  const { inputFields, checkboxFields, checkboxLinked } = useSignupFields();

  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data); //

  return (
    <AuthLayout title='회원가입'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <h1>회원정보를 입력해주세요</h1>
          {inputFields.map((i, index) => (
            <li key={index}>
              <Input
                {...register(i.name, validationRules[i.name])}
                icon={i.icon}
                type={i.type}
                placeholder={i.placeholder}
                message={errors[i.name]?.message?.toString()}
                isValid={
                  !errors[i.name] && touchedFields[i.name] ? true : false
                }
                validations={
                  i.name === 'password' && touchedFields[i.name]
                    ? validationStatus[i.name]
                    : undefined
                }
              />
            </li>
          ))}
        </InputGroup>
        <Section>
          <h1>쿠팡 서비스약관에 동의해주세요 </h1>
          <CheckboxGroup //
            fields={checkboxFields}
            register={register}
            linked={checkboxLinked}
          />
        </Section>
        <Button type='submit' colored>
          동의하고 가입하기
        </Button>
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

const Section = styled.section`
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
`;
