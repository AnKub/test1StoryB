import type { Meta, StoryObj } from '@storybook/react';
import Toast from './Toast';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['success', 'error', 'warning', 'info'],
    },
    duration: {
      control: { type: 'number', min: 1000, max: 10000, step: 500 },
    },
    showCloseButton: {
      control: { type: 'boolean' },
    },
    visible: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// базовий
export const InfoToast: Story = {
  args: {
    type: 'info',
    message: 'This is an info message',
    duration: 4000,
  },
};

// успішне
export const SuccessToast: Story = {
  args: {
    type: 'success',
    message: 'Operation completed successfully!',
    duration: 3000,
  },
};

// помилка
export const ErrorToast: Story = {
  args: {
    type: 'error',
    message: 'Something went wrong. Please try again.',
    duration: 5000,
  },
};

// попередження
export const WarningToast: Story = {
  args: {
    type: 'warning',
    message: 'Warning: Your session will expire soon',
    duration: 6000,
  },
};

// з кн закриття
export const WithCloseButton: Story = {
  args: {
    type: 'info',
    message: 'You can close this manually',
    showCloseButton: true,
    duration: 0, 
  },
};

// довге
export const LongMessage: Story = {
  args: {
    type: 'warning',
    message: 'This is a very long toast message that should wrap nicely and show how the component handles longer text content without breaking the layout',
    showCloseButton: true,
    duration: 8000,
  },
};

// швидко зникає
export const QuickToast: Story = {
  args: {
    type: 'success',
    message: 'Quick notification',
    duration: 1500,
  },
};

// демо 
export const AllTypes: Story = {
  render: () => (
    <div>
      <div style={{ 
        position: 'fixed', 
        bottom: '300px', 
        right: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
        <Toast type="success" message="Success message" visible={true} duration={0} />
        <Toast type="error" message="Error occurred" visible={true} duration={0} />
        <Toast type="warning" message="Warning alert" visible={true} duration={0} />
        <Toast type="info" message="Info notification" visible={true} duration={0} />
      </div>
      <div style={{ 
        padding: '20px', 
        textAlign: 'center',
        color: '#666',
        fontSize: '14px'
      }}>
        Multiple toast  (auto-close disabled for demo)
      </div>
    </div>
  ),
};