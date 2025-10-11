import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import SidebarMenu, { type MenuItem } from './SidebarMenu';

const meta: Meta<typeof SidebarMenu> = {
  title: 'Components/SidebarMenu',
  component: SidebarMenu,
  parameters: {
    layout: 'fullscreen', 
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const simpleMenuItems: MenuItem[] = [
  { id: '1', label: 'Dashboard', icon: '📊' },
  { id: '2', label: 'Users', icon: '👽' },
  { id: '3', label: 'Settings', icon: '⚙️' },
  { id: '4', label: 'Help', icon: '🐱‍🏍' },
];

const nestedMenuItems: MenuItem[] = [
  { id: '1', label: 'Dashboard', icon: '📊' },
  { 
    id: '2', 
    label: 'Products', 
    icon: '📦',
    children: [
      { id: '2-1', label: 'All Products', icon: '📋' },
      { id: '2-2', label: 'Categories', icon: '🏷️' },
      { id: '2-3', label: 'Reviews', icon: '⭐' },
    ]
  },
  {
    id: '3',
    label: 'Analytics',
    icon: '📈',
    children: [
      { id: '3-1', label: 'Sales Report', icon: '💰' },
      { id: '3-2', label: 'Traffic', icon: '🚦' },
    ]
  },
  { id: '4', label: 'Settings', icon: '⚙️' },
];

const deepNestedItems: MenuItem[] = [
  { id: '1', label: 'Home', icon: '🏠' },
  {
    id: '2',
    label: 'Admin Panel',
    icon: '🔐',
    children: [
      { id: '2-1', label: 'Users Management', icon: '👥' },
      {
        id: '2-2',
        label: 'Content',
        icon: '📝',
        children: [
          { id: '2-2-1', label: 'Posts', icon: '📄' },
          { id: '2-2-2', label: 'Comments', icon: '💬' },
        ]
      },
      { id: '2-3', label: 'Reports', icon: '📊' },
    ]
  },
  { id: '3', label: 'Profile', icon: '👤' },
];

// просте меню 
export const OpenSimpleMenu: Story = {
  args: {
    items: simpleMenuItems,
    isOpen: true,
  },
};

// закрите 
export const ClosedMenu: Story = {
  args: {
    items: simpleMenuItems,
    isOpen: false,
  },
};

// з підпунктами
export const WithSubmenus: Story = {
  args: {
    items: nestedMenuItems,
    isOpen: true,
  },
};

// глибоке вкладення
export const DeepNested: Story = {
  args: {
    items: deepNestedItems,
    isOpen: true,
  },
};

// інтерактивне з кнопкою
export const InteractiveMenu: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <div>
        <div style={{ 
          padding: '20px', 
          textAlign: 'center',
          height: '100vh',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        }}>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            style={{
              padding: '12px 24px',
              background: 'rgba(255, 255, 255, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '8px',
              color: 'white',
              cursor: 'pointer',
              fontSize: '16px',
              backdropFilter: 'blur(10px)'
            }}
          >
            {isOpen ? 'Close Menu' : 'Open Menu'}
          </button>
          
          <p style={{ color: 'white', marginTop: '20px' }}>
            Click to toggle sidebar. Try clicking outside to close.
          </p>
        </div>
        
        <SidebarMenu 
          items={nestedMenuItems}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onItemClick={(item) => {
            console.log('Clicked:', item.label);
            if (!item.children) {
              setIsOpen(false); // закриваємо після кліку 
            }
          }}
        />
      </div>
    );
  },
};

// демо 
export const AllFeatures: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true);
    
    return (
      <div style={{ 
        height: '100vh', 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '20px'
      }}>
        <div style={{ color: 'white' }}>
          <h2>SidebarMenu Demo</h2>
          <p>• Slides from right</p>
          <p>• Expandable submenus</p>
          <p>• Click backdrop to close</p>
          <p>• Glassmorphism design</p>
          
          <button 
            onClick={() => setIsOpen(true)}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              background: 'rgba(255, 255, 255, 0.2)',
              border: 'none',
              borderRadius: '6px',
              color: 'white',
              cursor: 'pointer'
            }}
          >
            Show Menu
          </button>
        </div>
        
        <SidebarMenu 
          items={deepNestedItems}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onItemClick={(item) => console.log('Selected:', item)}
        />
      </div>
    );
  },
};