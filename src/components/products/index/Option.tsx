import styled from '@emotion/styled';
import { MouseEventHandler, ReactNode } from 'react';

interface IProps {
  isActive: boolean;
  value: number;
  onClick?: MouseEventHandler<HTMLElement>;
  icon?: ReactNode;
}

const Option = ({ value, isActive, onClick, icon }: IProps) => {
  return (
    <Li>
      <button
        data-value={value}
        disabled={isActive}
        onClick={onClick}
        className={isActive ? 'active' : ''}
      >
        <span>{value}개씩 보기</span>
        {icon}
      </button>
    </Li>
  );
};

export default Option;

const Li = styled.li`
  & > button {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 105px;
    margin: auto;
    padding: 0 10px;
    height: 32px;
    border: none;
    background-color: transparent;
    line-height: 1;
    font-size: 12px;
    color: #555;

    & > span {
      margin-right: 10px;
    }

    &:hover {
      background-color: #fafafa;
    }

    &.active {
      font-weight: bold;
    }
  }
`;
