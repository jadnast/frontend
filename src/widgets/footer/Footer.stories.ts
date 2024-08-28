import type { Meta, StoryObj } from '@storybook/react';
import { Footer as Foot } from './Footer';

const meta: Meta<typeof Foot> = { // Explicitly type 'meta'
  title: 'Widgets/Footer',
  component: Foot,
  parameters: {
    layout: 'centered',
  },
  args: { 
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Footer: Story = {
  args: {
    disabled: false,
    country: 'ru_RU'
  },
};