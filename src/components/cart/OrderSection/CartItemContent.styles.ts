import styled from '@emotion/styled';
import { TCartType } from '../../../types';

export const Box = styled.div`
  margin-left: 20px;
  padding: 10px;
  width: 100%;
  height: 100%;
  color: #888;
`;

export const H3 = styled.p`
  padding-bottom: 5px;
  margin-bottom: 10px;
  height: 41px;
  line-height: 41px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -1px;
  color: #555;
  border-bottom: 1px solid #e2e5e7;

  &:hover {
    text-decoration: underline;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const Left = styled.span<{ type: TCartType }>`
  flex: 1 1 0;

  & > span {
    margin-right: 4px;
    color: ${(props) => (props.type === 'rocket' ? '#00891a' : '#555')};
  }
`;

export const Right = styled.span`
  & > span > button > i {
    color: #888;
  }
`;

export const Span = styled.span`
  margin-right: 20px;

  & > input {
    margin-left: 10px;
    display: inline-block;
    width: 50px;
    border-radius: 3px;
    padding-left: 6px;
    font-size: 12px;
    font-weight: 300;
    color: #444;
    border: 1px solid #e2e5e7;
  }
`;
