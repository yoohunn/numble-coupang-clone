import { css } from '@emotion/react';

export const itemBtnStyle = css`
  margin-right: 7px;
  position: relative;
  line-height: 40px;
  width: 191px;
  height: 42px;
  background: transparent;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
`;

export const itemWhiteBtnStyle = css`
  ${itemBtnStyle}

  color: #346aff;
  border: 1px solid #346aff;

  &:hover {
    color: #0f5ca8;
    border-color: #0f5ca8;
  }
`;

export const otherItemLi = css`
  display: flex;
  flex-direction: column;
  width: 160px;
  margin-right: 45px;
`;
