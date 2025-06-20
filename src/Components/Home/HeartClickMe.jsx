import React, { useState, useEffect } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ClickMeButton from './ClickMeButton';
import BirthdayContent from './BirthdayContent';

function getTimeSince(date) {
    const now = new Date();
    let years = now.getFullYear() - date.getFullYear();
    let months = now.getMonth() - date.getMonth();
    let days = now.getDate() - date.getDate();
    let hours = now.getHours() - date.getHours();
    let minutes = now.getMinutes() - date.getMinutes();
    let seconds = now.getSeconds() - date.getSeconds();

    if (seconds < 0) { seconds += 60; minutes--; }
    if (minutes < 0) { minutes += 60; hours--; }
    if (hours < 0) { hours += 24; days--; }
    if (days < 0) {
        months--;
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
    }
    if (months < 0) { months += 12; years--; }

    return { years, months, days, hours, minutes, seconds };
}

function HeartClickMe() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [clicked, setClicked] = useState(false);
    const [fade, setFade] = useState(true);
    const [timer, setTimer] = useState(getTimeSince(new Date('2002-06-21T00:00:00')));
    // Balloon animation state
    const [showBalloons, setShowBalloons] = useState(false);

    useEffect(() => {
        if (clicked) {
            setTimeout(() => setFade(false), 800);
        }
    }, [clicked]);

    useEffect(() => {
        if (clicked) {
            const interval = setInterval(() => {
                setTimer(getTimeSince(new Date('2002-06-21T00:00:00')));
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [clicked]);

    useEffect(() => {
        if (clicked) {
            setShowBalloons(true);
            // Remove balloons after 4 seconds
            const timeout = setTimeout(() => setShowBalloons(false), 4000);
            return () => clearTimeout(timeout);
        }
    }, [clicked]);

    return (
        <Box sx={{ width: '100%', position: 'relative', height: '100%' }}>
            {/* Animated Balloons from bottom to top */}
            {showBalloons && (
                <Box id="balloon-container" sx={{
                    position: 'fixed',
                    left: 0,
                    bottom: 0,
                    width: '100vw',
                    height: '100vh',
                    pointerEvents: 'none',
                    zIndex: 1000,
                }}>
                    {[...Array(12)].map((_, i) => {
                        const colors = ['#e91e63', '#FFD700', '#FF69B4', '#FFD1DC', '#FFB347', '#fff'];
                        const color = colors[i % colors.length];
                        const left = Math.random() * 90 + 2;
                        const size = 36 + Math.random() * 32;
                        const delay = Math.random() * 1.5;
                        const duration = 3.5 + Math.random();
                        return (
                            <span
                                key={i}
                                className="balloon-emoji animated-balloon"
                                style={{
                                    left: `${left}%`,
                                    fontSize: `${size}px`,
                                    color,
                                    animationDelay: `${delay}s`,
                                    animationDuration: `${duration}s`,
                                }}
                                role="img"
                                aria-label="balloon"
                            >
                                🎈
                            </span>
                        );
                    })}
                </Box>
            )}
            <style>{`
                @keyframes fadeInUp {
                    0% { opacity: 0; transform: translateY(40px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                .fadeInUp {
                    animation: fadeInUp 1s cubic-bezier(0.23, 1, 0.32, 1) both;
                }
                @keyframes popIn {
                    0% { opacity: 0; transform: scale(0.7); }
                    80% { opacity: 1; transform: scale(1.1); }
                    100% { opacity: 1; transform: scale(1); }
                }
                .popIn {
                    animation: popIn 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;
                }
                @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
                @keyframes bounce {
                    0%, 100% { transform: translateY(0); }
                    20% { transform: translateY(-10px); }
                    40% { transform: translateY(-20px); }
                    60% { transform: translateY(-10px); }
                    80% { transform: translateY(-5px); }
                }
                .cute-bounce {
                    animation: bounce 1.2s infinite cubic-bezier(.36,.07,.19,.97);
                }
                @keyframes cakeWobble {
                    0%, 100% { transform: rotate(-5deg) scale(1); }
                    20% { transform: rotate(5deg) scale(1.1); }
                    40% { transform: rotate(-5deg) scale(1.05); }
                    60% { transform: rotate(5deg) scale(1.1); }
                    80% { transform: rotate(-5deg) scale(1); }
                }
                .animated-cake {
                    display: inline-block;
                    font-size: 2.2rem;
                    margin: 0 0.2em;
                    animation: cakeWobble 1.6s infinite;
                }
                @keyframes candleFlicker {
                    0%, 100% { filter: brightness(1); transform: scaleY(1); }
                    20% { filter: brightness(1.3); transform: scaleY(1.1); }
                    40% { filter: brightness(0.8); transform: scaleY(0.95); }
                    60% { filter: brightness(1.2); transform: scaleY(1.05); }
                    80% { filter: brightness(1); transform: scaleY(1); }
                }
                .animated-candle {
                    display: inline-block;
                    font-size: 2rem;
                    margin: 0 0.1em;
                    animation: candleFlicker 1.1s infinite;
                }
                @keyframes balloonFloatUp {
                    0% {
                        bottom: -60px;
                        opacity: 0.7;
                        transform: translateY(0) scale(1) rotate(-8deg);
                    }
                    40% {
                        opacity: 1;
                        transform: translateY(-30vh) scale(1.05) rotate(8deg);
                    }
                    80% {
                        opacity: 1;
                        transform: translateY(-70vh) scale(0.98) rotate(-6deg);
                    }
                    100% {
                        bottom: 100vh;
                        opacity: 0.7;
                        transform: translateY(-100vh) scale(1.02) rotate(4deg);
                    }
                }
                .animated-balloon {
                    position: absolute;
                    bottom: 0;
                    animation: balloonFloatUp 4s linear forwards;
                    user-select: none;
                    pointer-events: none;
                    filter: drop-shadow(0 2px 8px #e91e6340);
                    transition: opacity 0.3s;
                }
            `}</style>
            <ClickMeButton isMobile={isMobile} clicked={clicked} fade={fade} setClicked={setClicked} />
            {clicked && !fade && (
                <BirthdayContent isMobile={isMobile} timer={timer} />
            )}
        </Box>
    );
}

export default HeartClickMe;
