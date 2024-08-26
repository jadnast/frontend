import type { Meta, StoryObj } from '@storybook/react';
import { Link } from './Link';
import { action } from '@storybook/addon-actions';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Shared/Link',
  component: Link,
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
    mode: 'default',
    children: 'Text',
    fontSize: 11,
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const List: Story = {
  args: {
    mode: 'list',
    disabled: false,
    children: 'Text',
  },
};

export const List_With_Country: Story = {
  args: {
    mode: 'list',
    disabled: false,
    children: 'Text',
    country: 'ru_RU'
  },
};

export const Default: Story = {
  args: {
    mode: 'default',
    disabled: false,
    children: 'Text',
    fontSize: 11
  },
};

export const Primary: Story = {
  args: {
    mode: 'primary',
    disabled: false,
    children: 'Text',
    fontSize: 11
  },
};

export const Secondary: Story = {
  args: {
    mode: 'secondary',
    disabled: false,
    children: 'Text',
    fontSize: 11
  },
};
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args