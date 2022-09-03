import { Path, RegisterOptions, FieldErrors } from 'react-hook-form';

import { SignupForm } from '../../types/signup.types';

const useSignupValidation = (
  errors: FieldErrors<SignupForm>,
  passward: string
) => {
  const validationRules: { [name in string]?: RegisterOptions } = {
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
      validate: (inputValue) =>
        passward === inputValue || '비밀번호가 동일하지 않습니다.',
    },
    name: {
      required: '이름을 정확히 입력하세요.',
    },
    phoneNumber: {
      required: '휴대폰 번호를 정확하게 입력하세요.',
    },
  };

  const validationStatus = {
    password: [
      {
        isValid: errors.password?.type !== 'pattern',
        message: '영문/숫자/특수문자 2가지 이상 조합 (8~20자)',
      },
      {
        isValid: errors.password?.type !== 'minLength',
        message: '비밀번호는 8자 이상이여야 합니다.',
      },
    ],
  };
  return { validationRules, validationStatus };
};

export default useSignupValidation;
