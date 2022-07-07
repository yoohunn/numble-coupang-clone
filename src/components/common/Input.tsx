import { HTMLInputTypeAttribute, InputHTMLAttributes, forwardRef } from 'react';
import styled from '@emotion/styled';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: HTMLInputTypeAttribute;
  placeholder: string;
  label?: string;
  message?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, label, message, ...rest }, ref) => (
    <>
      <Label error={!!message}>
        <span>{label || '💌'}</span>
        <input type={type} {...rest} ref={ref} />
      </Label>
      {message && <Span>{message}</Span>}
    </>
  )
);

export default Input;

const Label = styled.label<{ error: boolean }>`
  display: flex;
  margin-top: 14px;
  width: 100%;
  border: 1px solid #ccc;
  background-color: #fafafa;
  transition: border-color 0.25s ease;

  border-bottom: ${({ error }) => (error ? '2px solid #e7223d' : '')};

  &:focus-within {
    border-bottom: 2px solid ${({ error }) => (error ? '#e7223d' : '#0074e9')};
  }

  span {
    min-width: 44px;
    height: 100%;
    text-align: center;
    margin: auto;
  }

  input {
    border: 0;
    height: 48px;
    width: 100%;
    padding: 16px 12px;
    border-left: 1px solid #ccc;
    color: #111;
    font-size: 14px;
    line-height: 20px;
    font-weight: 700;

    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #aaa;
    }
  }
`;

const Span = styled.div`
  color: #e52528;
  margin: 9px 12px 0;
  font-size: 12px;
  line-height: 18px;
`;
