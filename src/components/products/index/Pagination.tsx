import styled from '@emotion/styled';
import { useState } from 'react';

import type { IPageState } from '../../../types/products.types';

interface IProps extends IPageState {
  totalPage: number;
}

const PAGE_COUNT = 10;

const Pagination = ({ page: currentPage, setPage, totalPage }: IProps) => {
  const [startPage, setStartPage] = useState(1);

  const endPage = Math.min(startPage + PAGE_COUNT - 1, totalPage);
  const pageCount = endPage - startPage + 1;

  const pages = Array(pageCount)
    .fill(startPage)
    .map((value, index) => value + index);

  const isNext = endPage >= startPage + PAGE_COUNT - 1;

  const onPrev = () => {
    setPage(startPage - 1);
    setStartPage(startPage - 10);
  };

  const onNext = () => {
    setPage(startPage + 10);
    setStartPage((start) => start + 10);
  };

  const onSetPage = (value: number) => {
    console.log({ currentPage }, value);
    setPage(value);
  };

  return (
    <Div>
      <Arrow disabled={startPage === 1} onClick={onPrev}>
        <i className='fa-solid fa-angle-left'></i>
      </Arrow>

      {pages.map((page) => (
        <PageButton
          key={page}
          onClick={() => onSetPage(page)}
          className={page === currentPage ? 'active' : ''}
        >
          {page}
        </PageButton>
      ))}

      {isNext && (
        <Arrow onClick={onNext}>
          <i className='fa-solid fa-angle-right'></i>
        </Arrow>
      )}
    </Div>
  );
};

export default Pagination;

const Div = styled.div`
  height: 54px;
  width: 100%;
  text-align: center;
  padding-top: 12px;
  margin: 20px auto 0 auto;
  background-color: rgba(255, 255, 255, 0.9);
  position: fixed;
  z-index: 1000;
  bottom: 0;
  left: 0;
  border-top: 1px solid #fff;
  box-shadow: 0 -3px 3px rgba(0, 0, 0, 0.05);
`;

const Button = styled.button`
  display: inline-block;
  margin: auto 4px;
  border: 1px solid transparent;
  width: 29px;
  height: 29px;
  color: #555;
  font-size: 12px;
  font-weight: bold;
`;

const Arrow = styled(Button)`
  background-color: #fafafa;
  border-color: #a8a8a8;

  &:disabled {
    cursor: default;
    opacity: 50%;
  }
`;

const PageButton = styled(Button)`
  &.active {
    color: #0073e9;
    border: 1px solid #0073e9;
  }

  &.active:hover {
    text-decoration: underline;
    color: #0073e9;
  }

  &:hover {
    text-decoration: underline;
    color: #f06016;
  }
`;
