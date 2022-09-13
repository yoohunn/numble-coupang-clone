import styled from '@emotion/styled';
import Router from 'next/router';

import { useLogin } from '../../../hooks/useUser';

export default function CartFallback({ isUser }: { isUser?: boolean }) {
  return (
    <Box>
      <p>장바구니에 담은 상품이 없습니다.</p>
      {!isUser && <LoginButton />}
    </Box>
  );
}

const LoginButton = () => {
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
      <span>
        로그인 하시면, 장바구니에 보관된 상품을 확인하실 수 있습니다.{' '}
      </span>
      <button onClick={onClick}>로그인하기</button>
    </LoginBox>
  );
};

const Box = styled.div`
  width: 100%;
  text-align: center;
  padding: 60px 0;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  margin: 20px auto;
  width: 900px;

  & > p {
    font-weight: 700;
    font-size: 14px;
    color: #55575f;
    margin-bottom: 13px;
  }
`;

const LoginBox = styled.div`
  & > span {
    line-height: 23px;
    font-size: 12px;
    color: #777881;
  }

  & > button {
    font-size: 12px;
    width: 80px;
    height: 23px;
    margin-left: 5px;
    border-radius: 1px;
    font-size: 12px;
    color: #777881;
    background-color: #fafafa;
    border: 1px solid #989898;
  }
`;
