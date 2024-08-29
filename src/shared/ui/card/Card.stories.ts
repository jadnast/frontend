import type { Meta, StoryObj } from '@storybook/react';
import { Card as CD } from './Card';

const meta = {
  title: 'Shared/Card',
  component: CD,
  parameters: {
    layout: 'centered',
  },
  args: { 
    disabled: false,
  },
} satisfies Meta<typeof CD>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Card: Story = {
  args: {
    disabled: false,
    children: 'Title',
    age: '13+',
    status: 'Выпускается',
    type: 'TV'
  },
};