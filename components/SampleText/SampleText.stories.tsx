import type { Meta, StoryObj } from '@storybook/react';

import SampleText from './SampleText';

const meta: Meta<typeof SampleText> = {
  title: 'Example/SampleText',
  component: SampleText,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof SampleText>;

export const Default: Story = {
  args: {},
};
