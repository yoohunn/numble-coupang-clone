import { SignupAgreements as CheckFields } from './auth.types';

type InputFields = {
  email: string;
  password: string;
  passwordCheck: string;
  name: string;
  phoneNumber: string;
};

export type SignupForm = InputFields & CheckFields;

export interface ICheckboxFields {
  name: string;
  title: string;
  required: boolean;
  description?: string;
  isChild?: boolean;
}
