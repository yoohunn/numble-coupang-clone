import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CheckboxGroup from './CheckboxGroup';
import { checkboxFields, SignupForm } from '../../../../pages/auth/signup/fields';
import { useForm } from 'react-hook-form';

export default {
  title: 'CheckboxGroup',
  component: CheckboxGroup,
  decorators: [
    (Story) => (
      <div
        style={{
          margin: 'auto',
          marginTop: '10px',
          minWidth: '290px',
          maxWidth: '460px',
        }}
      >
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof CheckboxGroup>;

const Template: ComponentStory<typeof CheckboxGroup<SignupForm>> = (args) =>{
  const {register} = useForm<SignupForm>()
  
  return (
  <CheckboxGroup<SignupForm> {...args} 
  register={register}
  />
)};

export const Standard = Template.bind({});
Standard.args = {
  fields:checkboxFields,

};