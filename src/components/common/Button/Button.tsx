import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

type Props = {
  title: string;
  onClick?: () => {};
  to?: string;
  colored?: boolean;
  type?: 'button' | 'submit';
};

const Button = ({ to, type, title, colored, onClick }: Props) => (
  <Wrapper colored={colored}>
    {to ? (
      <Link href={to} passHref>
        <a>{title}</a>
      </Link>
    ) : (
      <button type={type} onClick={onClick}>
        {title}
      </button>
    )}
  </Wrapper>
);

export default Button;

export const Wrapper = styled.div<{ colored?: boolean }>`
  button,
  a {
    display: block;
    width: 100%;
    padding: 17px 0;
    border-radius: 2px;
    font-size: 17px;
    line-height: 20px;
    font-weight: 700;
    text-align: center;
    color: ${({ colored }) => (colored ? '#fff' : '#0074e9')};
    background-color: ${({ colored }) => (colored ? '#0074e9' : '#fff')};
    box-shadow: inset 0 -1px 0 ${({ colored }) => (colored ? 'rgba(0, 0, 0, 0.38)' : 'rgba(0, 0, 0, 0.15)')};
    border: ${({ colored }) => (colored ? 'none' : '1px solid #ccc')};

    &:hover {
      cursor: pointer;
    }

    &:active {
      box-shadow: ${({ colored }) =>
        colored
          ? 'inset 0 2px 0 rgba(0,0,0,0.38);'
          : 'inset 0 1px 0 rgba(0, 0, 0, 0.15);'};
    }
  }
`;