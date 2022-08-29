import styled from '@emotion/styled';

import Option from './Option';
import type { ILimitState, TLimit } from '../../../types/products.types';

interface IProps extends ILimitState {}

const Select = ({ limit, setLimit }: IProps) => {
  const onClick = (value: TLimit) => {
    if (limit === value) return;
    setLimit(value);
  };

  return (
    <Ul>
      <Option
        value={limit}
        isActive
        icon={<i className='fa-solid fa-angle-down'></i>}
      />

      <div>
        <Option
          value={12}
          isActive={limit === 12}
          icon={<i className='fa-solid fa-angle-up'></i>}
          onClick={() => onClick(12)}
        />
        <Option
          value={24}
          isActive={limit === 24}
          onClick={() => onClick(24)}
        />
      </div>
    </Ul>
  );
};

export default Select;

const Ul = styled.ul`
  margin-left: auto;
  width: 105px;
  height: 100%;

  & > div {
    display: none;
  }

  &:hover > li {
    display: none;
  }

  &:hover > div {
    display: block;
  }
`;
