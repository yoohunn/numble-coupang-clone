import styled from '@emotion/styled';

import type { ICartSelectAllProps, TOnRemoveSelected } from '../../../types';
import SelectAll from './SelectAll';

interface IProps extends ICartSelectAllProps {
  count: number;
  onRemoveSelected: TOnRemoveSelected;
}

const Foot = ({
  count,
  isSelectedAll,
  onSelectAll,
  onRemoveSelected,
}: IProps) => (
  <Box>
    <SelectAll isSelectedAll={isSelectedAll} onSelectAll={onSelectAll}>
      <span>전체선택 ({count}/4)</span>
    </SelectAll>
    <Button onClick={onRemoveSelected}>선택삭제</Button>
  </Box>
);
export default Foot;

const Box = styled.div`
  padding: 20px 10px;
`;

const Button = styled.button`
  padding: 5px 6px;
  margin-left: 10px;
  border: 1px solid #ccc;
  text-align: center;
  font-size: 12px;
  color: #111;
`;
