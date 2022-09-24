import styled from '@emotion/styled';

import { AuthFallback } from '../../global';

export default function CartFallback({ isUser }: { isUser?: boolean }) {
  return (
    <Box>
      <p>장바구니에 담은 상품이 없습니다.</p>
      {!isUser && (
        <AuthFallback message='로그인 하시면, 장바구니에 보관된 상품을 확인하실 수 있습니다.' />
      )}
    </Box>
  );
}

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
