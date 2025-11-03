import type { Meta, StoryObj } from '@storybook/react';
import AnimatedEmoji from '.';

const meta: Meta<typeof AnimatedEmoji> = {
  title: 'Components/AnimatedEmoji',
  component: AnimatedEmoji,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['angry', 'confused', 'relaxed'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Злий - обертається
export const AngryEmoji: Story = {
  args: {
    type: 'angry',
    size: 'md',
  },
};

// Збентежений - тремтить
export const ConfusedEmoji: Story = {
  args: {
    type: 'confused', 
    size: 'md',
  },
};

// Розслаблений -  погойдується
export const RelaxedEmoji: Story = {
  args: {
    type: 'relaxed',
    size: 'md',
  },
};


export const DifferentSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      <AnimatedEmoji type="angry" size="sm" />
      <AnimatedEmoji type="confused" size="md" />
      <AnimatedEmoji type="relaxed" size="lg" />
    </div>
  ),
};

export const AllEmojis: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '30px', 
      alignItems: 'center',
      padding: '20px'
    }}>
      <div style={{ textAlign: 'center', color: 'white' }}>
        <h3>Click the angry one! 👇</h3>
        <AnimatedEmoji type="angry" size="lg" />
      </div>
      
      <div style={{ textAlign: 'center', color: 'white' }}>
        <h3>Hover over confused! 👇</h3>
        <AnimatedEmoji type="confused" size="lg" />
      </div>
      
      <div style={{ textAlign: 'center', color: 'white' }}>
        <h3>Relaxed one sways! 👇</h3>
        <AnimatedEmoji type="relaxed" size="lg" />
      </div>
    </div>
  ),
};