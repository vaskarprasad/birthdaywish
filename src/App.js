import logo from './logo.svg';
import './App.css';
import HeartClickMe from './Components/Home/HeartClickMe';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Create confetti container
    const container = document.createElement('div');
    container.id = 'confetti-container';
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100vw';
    container.style.height = '100vh';
    container.style.pointerEvents = 'none';
    container.style.zIndex = '1000';
    document.body.appendChild(container);

    // Generate confetti pieces
    const colors = ['#FFD700', '#FF69B4', '#e91e63', '#fff', '#f5e6b2', '#e2b96f', '#FFD1DC', '#FFB347'];
    const confettiCount = 48;
    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti-piece';
      confetti.style.left = `${Math.random() * 98}%`;
      confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.width = `${6 + Math.random() * 6}px`;
      confetti.style.height = `${12 + Math.random() * 16}px`;
      confetti.style.opacity = 0.8 + Math.random() * 0.2;
      confetti.style.borderRadius = `${Math.random() > 0.5 ? '3px' : '50%'}`;
      confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
      confetti.style.animationDelay = `${Math.random() * 1.2}s`;
      container.appendChild(confetti);
    }

    // Remove confetti after animation
    setTimeout(() => {
      if (container.parentNode) container.parentNode.removeChild(container);
    }, 3500);

    // Cleanup
    return () => {
      if (container.parentNode) container.parentNode.removeChild(container);
    };
  }, []);

  return (
    <div
      className="App"
      style={{
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #FFD700 0%, #FFD1DC 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{`
        @keyframes confettiDrop {
          0% {
            top: -40px;
            opacity: 0.7;
            transform: rotate(0deg) scaleY(0.7);
          }
          60% {
            opacity: 1;
            transform: rotate(8deg) scaleY(1.1);
          }
          80% {
            opacity: 1;
            transform: rotate(-6deg) scaleY(0.95);
          }
          100% {
            top: 100vh;
            opacity: 0.8;
            transform: rotate(360deg) scaleY(1);
          }
        }
        #confetti-container {
          pointer-events: none;
        }
        .confetti-piece {
          position: absolute;
          top: 0;
          animation: confettiDrop 2.6s cubic-bezier(.5,.2,.2,1) forwards;
        }
      `}</style>
      <HeartClickMe />
    </div>
  );
}

export default App;
