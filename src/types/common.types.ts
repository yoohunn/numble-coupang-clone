import { ComponentProps } from 'react';
import { Path } from 'react-hook-form';

import Checkbox from '../components/common/Checkbox/Checkbox';
import Input from '../components/common/Input/Input';

export interface IInput<TForm> extends ComponentProps<typeof Input> {
  name: keyof TForm;
}
export interface ICheck<TForm> extends ComponentProps<typeof Checkbox> {
  name: Path<TForm>;
}
