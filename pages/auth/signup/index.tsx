import styled from '@emotion/styled';
import Button from '../../../src/components/common/Button/Button';
import Checkbox from '../../../src/components/common/Checkbox/Checkbox';
import Input from '../../../src/components/common/Input/Input';
import AuthLayout from '../layout';

const fields = [{ type: 'email', placeholder: '아이디(이메일)' }];

const checkList = [
  { title: '[필수] 만 14세 이상입니다', require: true },
  { title: '[필수] 쿠팡 이용약관 동의', description: 'sdf', require: true },
  {
    title: '[필수] 전자금융거래 이용약관 동의',
    description: 'dd',
    require: true,
  },
  {
    title: '[필수] 개인정보 수집 및 이용 동의',
    description: 'dd',
    require: true,
  },
  {
    title: '[필수] 개인정보 제3자 제공 동의',
    description: 'dd',
    require: true,
  },
  {
    title: '[선택] 광고성 목적의 개인정보 수집 및 이용 동의',
    description: 'dd',
    require: false,
  },
  {
    title: '[선택] 광고성 정보 수신 동의',
    description: 'dd',
    require: false,
  },
  { title: '[선택] 이메일 수신 동의', require: false, subItem: true },
  { title: '[선택] SMS,MMS 수신 동의', require: false, subItem: true },
  { title: '[선택] 앱 푸시 수신 동의', require: false, subItem: true },
];

export default function SignupPage() {
  return (
    <AuthLayout title='회원가입'>
      <InputGroup>
        <h1 className='title'>회원정보를 입력해주세요</h1>
        <Input type='email' placeholder='아이디(이메일)' />
        <Input type='password' placeholder='비밀번호' />
        <Input type='password' placeholder='비밀번호 확인' />
        <Input type='text' placeholder='이름' />
        <Input type='text' placeholder='휴대폰 번호' />
      </InputGroup>

      <CheckboxGroup>
        <h1 className='title'>쿠팡 서비스약관에 동의해주세요 </h1>
        <Checkbox title='모두 동의합니다.' bold />
        <p>
          동의에는 필수 및 선택 목적(광고성 정보 수신 포함)에 대한 동의가
          포함되어 있으며, 선택 목적의 동의를 거부하시는 경우에도 서비스 이용이
          가능합니다.{' '}
        </p>
        <ul>
          {checkList.map((i) => (
            <li key={Math.random().toString(36).slice(2)}>
              <Checkbox
                title={i.title}
                description={i.description}
                required={i.require}
                subItem={i.subItem}
              />
            </li>
          ))}
        </ul>
      </CheckboxGroup>

      <Button title='동의하고 가입하기' type='submit' colored />
    </AuthLayout>
  );
}

const InputGroup = styled.div`
  margin-bottom: 20px;

  & > .title {
    margin: 0;
    padding: 20px 0 10px 0;
    font-size: 14px;
    font-weight: bold;
    line-height: 1.29;
    color: #111;
  }
`;

const CheckboxGroup = styled.section`
  border-top: 1px solid #f1f4f6;

  & > .title {
    margin: 0;
    padding: 20px 0 17px 0;
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

  li {
    list-style: none;
  }
`;
