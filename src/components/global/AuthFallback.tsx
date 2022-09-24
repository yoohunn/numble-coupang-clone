import styled from '@emotion/styled';
import Router from 'next/router';

import { useLogin } from '../../hooks/useUser';

interface IProps {
  message?: string;
}

const AuthFallback = ({ message }: IProps) => {
  const login = useLogin();

  const onClick = () =>
    login(
      {
        email: 'sdfswdf@naver.com',
        password: 'sdfsdf!rDflsjdcfs',
      },
      {
        onSuccess: () => {
          Router.reload();
        },
      }
    );

  return (
    <LoginBox>
      <span>{message}</span>
      <Button onClick={onClick}>로그인하기</Button>
    </LoginBox>
  );
};

export default AuthFallback;

const LoginBox = styled.div`
  & > span {
    line-height: 23px;
    font-size: 12px;
    color: #777881;
  }
`;

const Button = styled.button`
  font-size: 12px;
  width: 80px;
  height: 23px;
  margin-left: 5px;
  border-radius: 1px;
  font-size: 12px;
  color: #777881;
  background-color: #fafafa;
  border: 1px solid #989898;
`;
