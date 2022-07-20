import { SignupAgreements as CheckFields } from '../services/auth.service';

type InputFields = {
  email: string;
  password: string;
  passwordCheck: string;
  name: string;
  phoneNumber: string;
};

export type SignupForm = InputFields & CheckFields;
