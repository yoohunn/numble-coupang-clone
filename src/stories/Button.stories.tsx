import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../components/common/Button/Button';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: '로그인',
  type: 'button',
  colored: true,
};

export const Submit = Template.bind({});
Submit.args = {
  title: '회원가입',
  href: '/signin',
};

export const Link = Template.bind({});
Link.args = {
  title: '동의하고 가입하기',
  type: 'submit',
  colored: true,
};
