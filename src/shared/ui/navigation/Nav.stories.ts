import type { Meta, StoryObj } from '@storybook/react';
import { Nav } from './Nav';

const meta = {
  title: 'Components/Navigation',
  component: Nav,
  parameters: {
    layout: 'centered',
  },
  args: { 
    disabled: false,
  },
} satisfies Meta<typeof Nav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Navigation: Story = {
  args: {
    disabled: false,
  },
};