import styled from '@emotion/styled';
import { MouseEventHandler, ReactNode } from 'react';

import { TLimit } from '../../../types/products.types';

interface IProps {
  isActive: boolean;
  value: TLimit;
  onClick?: MouseEventHandler<HTMLElement>;
  icon?: ReactNode;
}

const Option = ({ value, isActive, onClick, icon }: IProps) => {
  return (
    <Li
      data-value={value}
      onClick={onClick}
      className={isActive ? 'active' : ''}
    >
      <span>{value}개씩 보기</span>
      {icon}
    </Li>
  );
};

export default Option;

const Li = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  padding: 0 10px;
  height: 32px;
  border: none;
  background-color: transparent;
  line-height: 1;
  font-size: 12px;
  color: #555;

  &:hover {
    background-color: #fafafa;
  }

  &.active {
    font-weight: bold;
  }
`;
