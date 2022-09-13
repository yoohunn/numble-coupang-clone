import styled from '@emotion/styled';

import type { ICartSelectAllProps, TOnSelectAll } from '../../../types';
import SelectAll from './SelectAll';

const Head = ({ isSelectedAll, onSelectAll }: ICartSelectAllProps) => {
  return (
    <Header>
      <SelectAll isSelectedAll={isSelectedAll} onSelectAll={onSelectAll}>
        <span>전체선택</span>
      </SelectAll>
      <span>상품정보</span>
      <div>
        <Span>상품금액</Span>
        <Span>배송비</Span>
      </div>
    </Header>
  );
};

export default Head;

const Header = styled.header`
  padding-left: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  font-size: 13px;
  font-weight: 600;
  color: #111;
  background-color: #fafafa;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;

  & > label {
    & > input {
      margin-right: 6px;
    }
  }
`;

const Span = styled.span`
  display: inline-block;
  width: 86px;
  text-align: center;
`;
