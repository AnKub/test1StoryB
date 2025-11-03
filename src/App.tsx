import React from 'react';
import './index.css';

import Input from './components/Input';
// import Toast from './components/Toast';
import AnimatedEmoji from './components/AnimatedEmoji';

const App: React.FC = () => {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)',
      padding: '40px',
      color: 'white',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h1>🎨 Component Library Demo</h1>
        <p>Це preview версія. Використовуйте Storybook для повного тестування:</p>
        <code style={{ 
          background: 'rgba(255,255,255,0.1)', 
          padding: '8px 16px', 
          borderRadius: '8px',
          display: 'inline-block',
          margin: '20px'
        }}>
          npm run storybook
        </code>
        
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '40px', 
          marginTop: '40px',
          alignItems: 'center'
        }}>
          
          {/* Input Demo */}
          <section>
            <h3>📥 Input Component</h3>
            <Input 
              type="text" 
              placeholder="Try the input..." 
              clearable 
            />
          </section>

          <section>
            <h3>😊 Animated Emoji</h3>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
              <AnimatedEmoji type="angry" size="lg" />
              <AnimatedEmoji type="confused" size="lg" />
              <AnimatedEmoji type="relaxed" size="lg" />
            </div>
            <p style={{ fontSize: '14px', opacity: 0.8, marginTop: '10px' }}>
              Click angry • Hover confused • Relaxed sways
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default App;