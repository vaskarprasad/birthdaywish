import React from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';

const ClickMeButton = ({ isMobile, clicked, fade, setClicked }) => (
  <Fade in={fade} timeout={800}>
    <Box
      sx={{
        position: clicked ? 'absolute' : 'static',
        top: clicked ? (isMobile ? 8 : 32) : 'auto',
        left: 0,
        right: 0,
        margin: clicked ? '0 auto' : 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: 2,
        transition: 'top 0.8s cubic-bezier(0.4,0,0.2,1)',
        pointerEvents: fade ? 'auto' : 'none',
      }}
    >
      <IconButton aria-label="click me" onClick={() => setClicked(true)} sx={{
        backgroundColor: '#ffb6c1',
        borderRadius: '50%',
        p: isMobile ? 1.2 : 2,
        '&:hover': { backgroundColor: '#ff69b4' },
        flexDirection: 'column',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: 3,
      }}>
        <FavoriteIcon sx={{ color: '#e91e63', fontSize: isMobile ? 28 : 40 }} />
        <Typography variant="button" sx={{ color: '#e91e63', fontWeight: 'bold', mt: 1, fontSize: isMobile ? 14 : 16 }}>
          Click Me
        </Typography>
      </IconButton>
    </Box>
  </Fade>
);

export default ClickMeButton;
