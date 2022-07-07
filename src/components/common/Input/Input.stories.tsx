import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from './Input';

export default {
  title: 'Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'default input',
};

export const Email = Template.bind({});
Email.args = {
  type: 'email',
  label: '📧',
  placeholder: '아이디(이메일)',
  message: '',
};

export const Password = Template.bind({});
Password.args = {
  type: 'password',
  label: '🔒',
  placeholder: '비밀번호',
};

export const Error = Template.bind({});
Error.args = {
  type: 'password',
  label: '🔒',
  placeholder: '비밀번호',
  message: '비밀번호 에러',
};
