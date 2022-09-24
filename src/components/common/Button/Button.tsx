import React, { ButtonHTMLAttributes } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  to?: string;
  colored?: boolean;
  size?: 'sm' | 'md';
}

const Button = ({ to, colored, size = 'md', children, ...props }: IButton) => {
  const button = (
    <SButton colored={colored} size={size} {...props}>
      {children}
    </SButton>
  );

  return to ? (
    <Link href={to} passHref>
      <a>{button}</a>
    </Link>
  ) : (
    button
  );
};

export default Button;

export const SButton = styled.button<{ colored?: boolean; size: 'sm' | 'md' }>`
  display: block;
  width: ${(props) => (props.size === 'md' ? '100%' : '68px')};
  padding: ${(props) => (props.size === 'md' ? '17px 0' : '6px 11px')};
  border-radius: 2px;
  font-size: ${(props) => (props.size === 'md' ? '17px' : '14px')};
  line-height: 20px;
  font-weight: ${(props) => (props.size === 'md' ? '700' : '500')};
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
`;
