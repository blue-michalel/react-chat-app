import React from 'react';
import { Meta, Story } from '@storybook/react';

import Spacing, { Props } from './Spacing';

export default {
  title: 'Components/Spacing',
  component: Spacing,
} as Meta;

const Template: Story<Props> = (arg) => (
  <div>
    <span>line1</span>
    <Spacing {...arg} />
    <span>line2</span>
  </div>
);

export const Space = Template.bind({});

Space.args = {
  bottom: 16,
  top: 16,
};
