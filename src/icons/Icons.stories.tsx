import React from 'react';
import { Meta, Story } from '@storybook/react';

import * as Icons from './index';

export default {
  title: 'Others/Icons',
} as Meta;

const Template: Story = () => (
  <div>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <h2 style={{ marginRight: 16 }}>PlayIcon</h2>
      <Icons.PlayIcon />
    </div>
  </div>
);

export const Play = Template.bind({});
