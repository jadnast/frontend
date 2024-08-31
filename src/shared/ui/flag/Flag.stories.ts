import type { Meta, StoryObj } from '@storybook/react';
import { Flag } from './Flag';

const meta = {
  title: 'Shared/Flag',
  component: Flag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
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
    country: 'kk_KZ'
  },
};

export const ua_UA: Story = {
  args: {
    disabled: false,
    country: 'uk_UA'
  },
};