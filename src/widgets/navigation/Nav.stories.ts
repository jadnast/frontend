import type { Meta, StoryObj } from '@storybook/react';
import { Navigation as Nav } from './Navigation';

const meta: Meta<typeof Nav> = { // Explicitly type 'meta'
  title: 'Widgets/Navigation',
  component: Nav,
  parameters: {
    layout: 'centered',
  },
  args: { 
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Navigation: Story = {
  args: {
    disabled: false,
  },
};