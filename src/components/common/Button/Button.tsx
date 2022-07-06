import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

interface IButton {
  title: string;
  onClick?: () => {};
  href?: string;
  type?: 'button' | 'submit';
  colored?: boolean;
}

const Button = ({ href, type, title, colored, onClick }: IButton) =>
  href ? (
    <Link href={href} passHref>
      <A colored={colored}>{title}</A>
    </Link>
  ) : (
    <StyledButton colored={colored} type={type} onClick={onClick}>
      {title}
    </StyledButton>
  );

export default Button;

export const StyledButton = styled.button<{ colored?: boolean }>`
  outline: none;
  display: block;
  width: 100%;
  padding: 17px 0;
  color: ${({ colored }) => (colored ? '#fff' : '#0074e9')};
  background-color: ${({ colored }) => (colored ? '#0074e9' : '#fff')};
  box-shadow: inset 0 -1px 0 ${({ colored }) => (colored ? 'rgba(0, 0, 0, 0.38)' : 'rgba(0, 0, 0, 0.15)')};
  border: ${({ colored }) => (colored ? 'none' : '1px solid #ccc')};
  border-radius: 2px;
  font-size: 17px;
  line-height: 20px;
  font-weight: 700;
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`;

export const A = StyledButton.withComponent('a');
