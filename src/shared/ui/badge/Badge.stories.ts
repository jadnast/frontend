import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Blocks/Badge',
  component: Badge,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { 
    disabled: false,
    mode: 'solid',
    children: 'Text',
    fontSize: '11px'
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    mode: 'solid',
    disabled: false,
    children: 'Text',
    fontSize: '11px'
  },
};

export const Ghost: Story = {
  args: {
    mode: 'ghost',
    disabled: false,
    children: 'Text',
    fontSize: '11px'
  },
};

export const Gray: Story = {
  args: {
    mode: 'gray',
    disabled: false,
    children: 'Text',
    fontSize: '11px'
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args