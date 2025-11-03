import type { Meta, StoryObj } from '@storybook/react';
import Input from '.';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'password', 'number'],
    },
    clearable: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Базовий
export const BasicText: Story = {
  args: {
    type: 'text',
    placeholder: 'Enter text...',
    clearable: false,
  },
};

// Інп з очищенням
export const WithClearButton: Story = {
  args: {
    type: 'text',
    placeholder: 'Text with clear button',
    clearable: true,
    value: 'standwithUA',
  },
};

// з показом/приховуванням
export const PasswordInput: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password',
    value: 'standwithUA',
  },
};

// з очищенням
export const PasswordWithClear: Story = {
  args: {
    type: 'password',
    placeholder: 'Password clear',
    clearable: true,
    value: 'standWithUA',
  },
};

// Числовий інп
export const NumberInput: Story = {
  args: {
    type: 'number',
    placeholder: 'Enter number',
    clearable: true,
  },
};



export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '300px' }}>
      <Input type="text" placeholder="Regular text" />
      <Input type="text" placeholder="With clear button" clearable value="Some text" />
      <Input type="password" placeholder="Password" value="standwithUA" />
      <Input type="password" placeholder="Password + clear" clearable value="secret" />
      <Input type="number" placeholder="Number" clearable />
    </div>
  ),
};