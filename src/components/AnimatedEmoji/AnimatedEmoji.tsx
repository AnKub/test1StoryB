import React, {useState} from 'react';
import './AnimatedEmoji.css';

export interface AnimatedEmojiProps {
  type: 'angry'|'confused'|'relaxed';
  size?: 'sm'| 'md' | 'lg';
  onClick?: () => void;
  className?: string;
}

const AnimatedEmoji: React.FC<AnimatedEmojiProps> = ({
  type,
  size = 'md',
  onClick,
  className = ''
}) => {
  const [isClicked, setIsClicked]= useState(false);
  const [isHovered, setIsHovered]=useState(false);

  const emojiMap = {
    angry: '😠',
    confused: '😕',
    relaxed: '😎',
  };

  const handleClick = () =>{
    if(type === 'angry'){
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 600);
    }
    onClick?.();
  };
//  опрацьовуємо ховер
const handleMouseEnter= ()=>{
  if (type === 'confused'){
    setIsHovered(true);
  }
};

const handleMouseLeave= ()=> {
  if(type === 'confused'){
    setIsHovered(false);
  }
};
 // форм класи
  const cssClasses = [
    'animated-emoji',
    `emoji-${type}`,
    `emoji-${size}`,
    isClicked && type === 'angry' ? 'spinning' : '',
    isHovered && type === 'confused' ? 'shaking' : '',
    type === 'relaxed' ? 'swaying' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <span
      className={cssClasses}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="button"
      tabIndex={0}
    >
      {emojiMap[type]}
    </span>
  );
};

export default AnimatedEmoji;