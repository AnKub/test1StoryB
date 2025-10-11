import React, { useState } from 'react';
import './Input.css';

export interface InputProps {
  type?: 'text' | 'password' | 'number';
  placeholder?: string;
  value?: string;
  clearable?: boolean;
  disabled?: boolean;
  onChange?: (value: string) => void;
  className?: string;
}

const Input: React.FC<InputProps> = ({ 
  type = 'text',
  placeholder = '',
  value = '',
  clearable = false,
  disabled = false,
  onChange,
  className = ''
}) => {
  const [inputValue, setInputValue] = useState(value);
  const [showPassword, setShowPassword] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const clearInput = () => {
    setInputValue('');
    if (onChange) {
      onChange('');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Визн тип інпуту
  const actualInputType = type === 'password' && showPassword ? 'text' : type;

  return (
    <div className={`input-wrapper ${className}`}>
      <div className="input-container">
        <input
          type={actualInputType}
          value={inputValue}
          placeholder={placeholder}
          onChange={handleInputChange}
          disabled={disabled}
          className="custom-input"
        />
        
        {/* Показуємо */}
        {type === 'password' && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="password-toggle"
            disabled={disabled}
          >
            {showPassword ? '👁️' : '👁️‍🗨️'}
          </button>
        )}
        
        {/*  кноп очищення */}
        {clearable && inputValue && !disabled && (
          <button
            type="button"
            onClick={clearInput}
            className="clear-btn"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;