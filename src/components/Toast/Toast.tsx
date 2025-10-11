import React, { useState, useEffect } from 'react';
import './Toast.css';

export interface ToastProps {
  type?: 'success' | 'error' | 'warning' | 'info';
  message: string;
  duration?: number; // скільки мс показувати
  showCloseButton?: boolean;
  onClose?: () => void;
  visible?: boolean;
  className?: string;
}

const Toast: React.FC<ToastProps> = ({
  type = 'info',
  message,
  duration = 4000, // 4 сек за замовчуванням
  showCloseButton = false,
  onClose,
  visible = true,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(visible);
  const [isAnimating, setIsAnimating] = useState(false);

  // автозакриття!!!
  useEffect(() => {
    if (!isVisible || duration <= 0) return;

    const timer = setTimeout(() => {
      handleClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [isVisible, duration]);

  // анімація
  useEffect(() => {
    if (visible) {
      setIsVisible(true);
      setTimeout(() => setIsAnimating(true), 50); //  затримка для плавності
    }
  }, [visible]);

  const handleClose = () => {
    setIsAnimating(false);
    // очікуємо на закінчення анім 
    setTimeout(() => {
      setIsVisible(false);
      if (onClose) onClose();
    }, 300);
  };

  const getIcon = () => {
    switch (type) {
      case 'success': return '✅';
      case 'error': return '❌';
      case 'warning': return '⚠️';
      default: return 'ℹ️';
    }
  };

  if (!isVisible) return null;

  return (
    <div className={`toast-container ${className}`}>
      <div 
        className={`toast toast-${type} ${isAnimating ? 'toast-show' : 'toast-hide'}`}
      >
        <div className="toast-content">
          <span className="toast-icon">{getIcon()}</span>
          <span className="toast-message">{message}</span>
        </div>
        
        {/* кнопка закриття  */}
        {showCloseButton && (
          <button 
            className="toast-close" 
            onClick={handleClose}
            type="button"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
};

export default Toast;