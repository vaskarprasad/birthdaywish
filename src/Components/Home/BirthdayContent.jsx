import React, { useState, useRef } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const messages = [
  "You light up every room you walk into!",
  "Your smile is contagious and brightens everyone's day.",
  "You make the world a happier place just by being you!",
  "Your kindness and warmth inspire everyone around you.",
  "Wishing you endless joy, laughter, and love!",
  "Happy Birthday, Shru! You are truly special!"
];

const BirthdayContent = ({ isMobile, timer }) => {
  const [msgIndex, setMsgIndex] = useState(0);
  const audioRef = useRef(null);
  const [musicStarted, setMusicStarted] = useState(false);

  // Start music on first render of this content
  React.useEffect(() => {
    if (!musicStarted && audioRef.current) {
      audioRef.current.play().catch(() => {});
      setMusicStarted(true);
    }
  }, [musicStarted]);

  const showNext = msgIndex < messages.length;

  return (
    <Box className="fadeInUp" sx={{
      position: 'absolute',
      top: isMobile ? 8 : 32,
      left: 0,
      right: 0,
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      zIndex: 1,
      px: isMobile ? 1 : 0,
    }}>
      {/* Happy Birthday Instrumental Music */}
      <audio ref={audioRef} src={require('../../yt1s.com - HAPPY BIRTHDAY TO YOU  PIANO INSTRUMENTAL  BEST HAPPY BITHDAY MUSIC 2021.mp3')} autoPlay loop style={{ display: 'none' }} />
      <Typography
        variant={isMobile ? 'h6' : 'h4'}
        sx={{
          color: '#e91e63',
          fontWeight: 'bold',
          mb: isMobile ? 1 : 2,
          letterSpacing: 2,
          textAlign: 'center',
          textDecoration: 'underline',
          fontFamily: `'Pacifico', 'Comic Sans MS', cursive, sans-serif`,
          fontSize: isMobile ? 22 : 32,
          lineHeight: 1.2,
          position: 'relative',
          display: 'inline-block',
          animation: 'bounce 1.2s infinite',
          animationTimingFunction: 'cubic-bezier(.36,.07,.19,.97)',
          animationDelay: '0.2s',
        }}
        className="cute-bounce"
      >
        Happy Birthday Shru !
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: isMobile ? 1 : 2, gap: isMobile ? 1 : 2 }}>
        {/* Animated Cakes */}
        <span className="cake-emoji animated-cake" role="img" aria-label="cake">🎂</span>
        <span className="candle-emoji animated-candle" role="img" aria-label="candle">🕯️</span>
        <span className="cake-emoji animated-cake" role="img" aria-label="cake">🍰</span>
        <span className="candle-emoji animated-candle" role="img" aria-label="candle">🕯️</span>
      </Box>
      <Typography variant={isMobile ? 'body1' : 'h5'} sx={{ color: '#e91e63', fontWeight: 'bold', mb: isMobile ? 1 : 2, textAlign: 'center' }}>
        Time since you started making the world a happier place :
      </Typography>
      <Box sx={{
        display: 'flex',
        gap: isMobile ? 1 : 2,
        mb: 1,
        flexWrap: isMobile ? 'wrap' : 'nowrap',
        justifyContent: 'center',
      }}>
        {[{ label: 'Years', value: timer.years }, { label: 'Months', value: timer.months }, { label: 'Days', value: timer.days }, { label: 'Hours', value: timer.hours }, { label: 'Minutes', value: timer.minutes }, { label: 'Seconds', value: timer.seconds }].map((item, idx) => (
          <Box
            key={item.label}
            className="popIn"
            style={{ animationDelay: `${0.1 * idx}s` }}
            sx={{
              border: '2px solid #e91e63',
              borderRadius: 2,
              px: isMobile ? 1 : 2,
              py: isMobile ? 0.5 : 1,
              background: 'rgba(255,255,255,0.85)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              minWidth: isMobile ? 48 : 70,
              mb: isMobile ? 1 : 0,
            }}
          >
            <Typography variant={isMobile ? 'body1' : 'h5'} sx={{ color: '#e91e63', fontWeight: 'bold' }}>{item.value}</Typography>
            <Typography variant="caption" sx={{ color: '#e91e63', fontSize: isMobile ? 10 : undefined }}>{item.label}</Typography>
          </Box>
        ))}
      </Box>
      {/* Personalised messages and next button */}
      <Box sx={{ mt: 2, minHeight: 48, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {msgIndex > 0 && (
          <Typography sx={{ color: '#e91e63', fontWeight: 'bold', fontSize: isMobile ? 16 : 20, mb: 1, textAlign: 'center', transition: 'all 0.4s', minHeight: 32 }}>
            {messages[msgIndex - 1]}
          </Typography>
        )}
        {showNext && (
          <Button
            variant="contained"
            sx={{ background: 'linear-gradient(90deg,#FFD700,#e91e63)', color: '#fff', fontWeight: 'bold', borderRadius: 3, boxShadow: 2, mt: 1, fontSize: isMobile ? 14 : 16 }}
            onClick={() => setMsgIndex(idx => idx + 1)}
          >
            {msgIndex === 0 ? 'Show a Message' : 'Next'}
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default BirthdayContent;
