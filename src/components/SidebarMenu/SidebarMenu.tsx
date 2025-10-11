import React, { useState } from 'react';
import './SidebarMenu.css';

export interface MenuItem {
  id: string;
  label: string;
  icon?: string;
  children?: MenuItem[];
}

export interface SidebarMenuProps {
  items: MenuItem[];
  isOpen?: boolean;
  onClose?: () => void;
  onItemClick?: (item: MenuItem) => void;
  className?: string;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({
  items,
  isOpen = false,
  onClose,
  onItemClick,
  className = ''
}) => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  // відкр/закр підменю
  const toggleExpanded = (itemId: string) => {
    setExpandedItems(prev => 
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  // обробка кліку по айтему
  const handleItemClick = (item: MenuItem) => {
    if (item.children && item.children.length > 0) {
      toggleExpanded(item.id);
    } else {
      if (onItemClick) onItemClick(item);
    }
  };

  // закриття по фону
  const handleBackdropClick = () => {
    if (onClose) onClose();
  };

  // рендер одного пункту меню
  const renderMenuItem = (item: MenuItem, level: number = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.includes(item.id);
    
    return (
      <div key={item.id} className="menu-item-container">
        <div 
          className={`menu-item level-${level} ${hasChildren ? 'has-children' : ''}`}
          onClick={() => handleItemClick(item)}
        >
          <div className="menu-item-content">
            {item.icon && <span className="menu-icon">{item.icon}</span>}
            <span className="menu-label">{item.label}</span>
          </div>
          
          {/* стрілочка для підменю */}
          {hasChildren && (
            <span className={`expand-arrow ${isExpanded ? 'expanded' : ''}`}>
              ▶
            </span>
          )}
        </div>
        
        {/* підменю */}
        {hasChildren && (
          <div className={`submenu ${isExpanded ? 'expanded' : 'collapsed'}`}>
            {item.children!.map(child => renderMenuItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {/* фон для закриття */}
      {isOpen && (
        <div 
          className="sidebar-backdrop" 
          onClick={handleBackdropClick}
        />
      )}
      
      {/* саме меню */}
      <div className={`sidebar-menu ${isOpen ? 'open' : 'closed'} ${className}`}>
        <div className="sidebar-content">
          {/* заголовок */}
          <div className="sidebar-header">
            <h3>Menu</h3>
            <button 
              className="close-btn"
              onClick={handleBackdropClick}
              type="button"
            >
              ✕
            </button>
          </div>
          
          {/* список меню */}
          <div className="menu-list">
            {items.map(item => renderMenuItem(item))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarMenu;