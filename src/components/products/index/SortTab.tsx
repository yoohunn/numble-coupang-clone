import styled from '@emotion/styled';

import type { ISorterState } from '../../../types/products.types';

interface IProps extends ISorterState {
  name: string;
  isActive: boolean;
}

const SortTab = ({ name, isActive, sorter, setSorter }: IProps) => {
  const onClick = () => {
    if (isActive) return null;
    setSorter(sorter);
  };

  return (
    <Li active={isActive}>
      <button onClick={onClick}>
        {isActive && <i className='fa-solid fa-check'></i>}
        <p>{name}</p>
      </button>
    </Li>
  );
};

export default SortTab;

const Li = styled.li<{ active: boolean }>`
  padding: 0 10px;
  font-size: 12px;
  font-family: 'apple sd gothic neo', '맑은 고딕', 'malgun gothic', 나눔고딕,
    nanumgothic, 돋움, dotum, sans-serif;
  border-left: 1px solid #eee;

  & > button {
    height: 100%;
    display: flex;
    gap: 3px;
    font-weight: ${(props) => (props.active ? 'bold' : 'nomal')};
    color: ${(props) => (props.active ? '#0073e9' : '#555')};

    &:hover {
      color: #0073e9;
    }
  }
`;
