import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from './Logo';

const meta = {
  title: 'Brand/Logotype',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  args: { 
    disabled: false,
    width: 200,
    href: '/'
  },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Logotype: Story = {
  args: {
    disabled: false,
    width: 200,
    href: '/'
  },
};