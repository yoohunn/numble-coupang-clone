import { IInput, ICheck } from '../../types/common.types';
import { SignupForm } from '../../types/signup.types';

const useSignupFields = () => {
  const inputFields: IInput<SignupForm>[] = [
    { icon: '📧', name: 'email', type: 'email', placeholder: '아이디(이메일)' },
    { icon: '🔒', name: 'password', type: 'password', placeholder: '비밀번호' },
    {
      icon: '🔓',
      name: 'passwordCheck',
      type: 'text',
      placeholder: '비밀번호 확인',
    },
    { icon: '👤', name: 'name', type: 'text', placeholder: '이름' },
    {
      icon: '📱',
      name: 'phoneNumber',
      type: 'text',
      placeholder: '휴대폰 번호',
    },
  ];

  const checkboxFields: ICheck<SignupForm>[] = [
    {
      name: 'terms_fourteen',
      title: '[필수] 만 14세 이상입니다',
      required: true,
    },
    {
      name: 'terms_service',
      title: '[필수] 쿠팡 이용약관 동의',
      description: 'sdf',
      required: true,
    },
    {
      name: 'terms_commerce',
      title: '[필수] 전자금융거래 이용약관 동의',
      description: 'dd',
      required: true,
    },
    {
      name: 'terms_privacy_collect_use',
      title: '[필수] 개인정보 수집 및 이용 동의',
      description: 'dd',
      required: true,
    },
    {
      name: 'agree_to_collect_third_part_information',
      title: '[필수] 개인정보 제3자 제공 동의',
      description: 'dd',
      required: true,
    },
    {
      name: 'agree_to_collect_for_ads',
      title: '[선택] 광고성 목적의 개인정보 수집 및 이용 동의',
      description: 'dd',
      required: false,
    },
    {
      name: 'agree_to_collect_for_ads',
      title: '[선택] 광고성 정보 수신 동의',
      description: 'dd',
      required: false,
    },
    {
      name: 'agree_to_receive_email',
      title: '[선택] 이메일 수신 동의',
      required: false,
      isChild: true,
    },
    {
      name: 'agree_to_receive_sms',
      title: '[선택] SMS,MMS 수신 동의',
      required: false,
      isChild: true,
    },
    {
      name: 'agree_to_receive_push',
      title: '[선택] 앱 푸시 수신 동의',
      required: false,
      isChild: true,
    },
  ];

  const checkboxLinked = {
    child: checkboxFields.filter((i) => !i.required).map((i) => i.name),
    parent: ['agree_to_collect_for_ads'],
  };

  return { inputFields, checkboxFields, checkboxLinked };
};

export default useSignupFields;
