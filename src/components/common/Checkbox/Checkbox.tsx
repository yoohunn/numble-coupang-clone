import { InputHTMLAttributes, forwardRef } from 'react';
import styled from '@emotion/styled';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  description?: string;
  subItem?: boolean;
  bold?: boolean;
}

const Checkbox = forwardRef<HTMLInputElement, Props>(
  ({ title, description, bold, required, subItem, ...rest }, ref) => (
    <Box bold={bold} subItem={subItem}>
      <label>
        <input type='checkbox' {...rest} ref={ref} />
        <span>{title}</span>
      </label>
      {description && <button>〉</button>}
    </Box>
  )
);

export default Checkbox;

const Box = styled.div<{ bold?: boolean; subItem?: boolean }>`
  padding-bottom: 12px;
  padding-left: ${({ subItem }) => (subItem ? '22px' : '0')};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  label {
    span {
      margin-left: 8px;
      color: #333333;
      font-size: ${({ bold }) => (bold ? '16px' : '14px')};
      font-weight: ${({ bold }) => (bold ? 'bold' : 400)};
      line-height: 1.4;
    }
  }

  button {
    outline: none;
    border: 0;
    background-color: transparent;
    cursor: pointer;
    width: 20px;
    height: 20px;
    font-size: 18px;
    font-weight: bold;
  }
`;
