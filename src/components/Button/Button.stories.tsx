import React from 'react';
import { Meta, Story } from '@storybook/react';

import Button, { Props } from './Button';
import { PlayIcon } from '../../icons';
import { Spacing } from '../Spacing';
import { Types } from './types';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<Props> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'row' }}>
    <div style={{ marginRight: '50px' }}>
      <h1>Big buttons</h1>
      <Button {...args} big />
      <Spacing />
      <Button {...args} LeftIcon={<PlayIcon />} big />
      <Spacing />
      <Button {...args} RightIcon={<PlayIcon />} big />
    </div>
    <div style={{ marginRight: '50px' }}>
      <h1>Normal size buttons</h1>
      <Button {...args} />
      <Spacing />
      <Button {...args} LeftIcon={<PlayIcon />} />
      <Spacing />
      <Button {...args} RightIcon={<PlayIcon />} />
    </div>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  title: 'Hey! Click me!',
  onClick: action('click'),
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: Types.SECONDARY,
  title: 'Hey! Click me!',
  onClick: action('click'),
};
