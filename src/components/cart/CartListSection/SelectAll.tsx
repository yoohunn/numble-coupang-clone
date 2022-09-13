import type { ICartSelectAllProps } from '../../../types';

interface IProps extends ICartSelectAllProps {
  children?: JSX.Element;
}

const SelectAll = ({ isSelectedAll, onSelectAll, children }: IProps) => (
  <label>
    <input type='checkbox' checked={isSelectedAll} onChange={onSelectAll} />
    {children}
  </label>
);

export default SelectAll;
