import styled from '@emotion/styled';
import type { ICartSelectProps } from '../../../types';

interface ICheckProps extends ICartSelectProps {
  id: number;
}

const SelectItem = ({ id, onSelect, isSelected }: ICheckProps) => (
  <Label>
    <input
      type='checkbox'
      checked={isSelected(id)}
      onChange={(e) => onSelect(id, e.target.checked)}
    />
  </Label>
);

export default SelectItem;

const Label = styled.label`
  width: 50px;
  text-align: center;
  margin-right: 10px;
`;
