import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'default',
};

export const Login = Template.bind({});
Login.args = {
  title: '로그인',
  type: 'button',
  colored: true,
};

export const SignIn = Template.bind({});
SignIn.args = {
  title: '회원가입',
  href: '/signin',
};

export const Agreement = Template.bind({});
Agreement.args = {
  title: '동의하고 가입하기',
  type: 'submit',
  colored: true,
};
