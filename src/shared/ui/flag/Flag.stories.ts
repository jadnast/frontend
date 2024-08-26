import type { Meta, StoryObj } from '@storybook/react';
import { Flag } from './Flag';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Blocks/Flag',
  component: Flag,
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
    country: 'ru_RU'
  },
} satisfies Meta<typeof Flag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ru_RU: Story = {
  args: {
    disabled: false,
    country: 'ru_RU'
  },
};

export const en_GB: Story = {
  args: {
    disabled: false,
    country: 'en_GB'
  },
};

export const kz_KZ: Story = {
  args: {
    disabled: false,
    country: 'kz_KZ'
  },
};

export const ua_UA: Story = {
  args: {
    disabled: false,
    country: 'ua_UA'
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args