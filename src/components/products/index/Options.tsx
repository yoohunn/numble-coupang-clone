import styled from '@emotion/styled';
import { MouseEventHandler } from 'react';

import Option from './Option';
import { TLimit } from '../../../types/products.types';

interface IProps {
  limit: TLimit;
}

const Select = ({ limit }: IProps) => {
  const onClick: MouseEventHandler<HTMLElement> = (e) =>
    console.log(e.currentTarget.dataset.value);

  return (
    <Ul>
      <Option
        value={limit}
        limit={limit}
        icon={<i className='fa-solid fa-angle-down'></i>}
      />

      <div>
        <Option
          value={12}
          limit={limit}
          icon={<i className='fa-solid fa-angle-up'></i>}
          onClick={onClick}
        />
        <Option value={24} limit={limit} onClick={onClick} />
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
