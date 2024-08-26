import type { Meta, StoryObj } from '@storybook/react';
import { Header as Head } from './Header';

const meta: Meta<typeof Head> = { // Explicitly type 'meta'
  title: 'Widgets/Header',
  component: Head,
  parameters: {
    layout: 'centered',
  },
  args: { 
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Header: Story = {
  args: {
    disabled: false,
  },
};