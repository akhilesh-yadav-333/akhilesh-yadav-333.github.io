import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const glitch = keyframes`
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-2px, 2px);
  }
  40% {
    transform: translate(-2px, -2px);
  }
  60% {
    transform: translate(2px, 2px);
  }
  80% {
    transform: translate(2px, -2px);
  }
  100% {
    transform: translate(0);
  }
`;

const glitch1 = keyframes`
  0% {
    clip-path: inset(40% 0 61% 0);
    transform: translate(0);
  }
  10% {
    clip-path: inset(92% 0 1% 0);
    transform: translate(-2px, 2px);
  }
  20% {
    clip-path: inset(43% 0 1% 0);
    transform: translate(2px, -2px);
  }
  30% {
    clip-path: inset(25% 0 58% 0);
    transform: translate(-1px, 1px);
  }
  40% {
    clip-path: inset(54% 0 7% 0);
    transform: translate(1px, -1px);
  }
  50% {
    clip-path: inset(58% 0 43% 0);
    transform: translate(-3px, 3px);
  }
  60% {
    clip-path: inset(40% 0 61% 0);
    transform: translate(3px, -3px);
  }
  70% {
    clip-path: inset(92% 0 1% 0);
    transform: translate(-2px, 2px);
  }
  80% {
    clip-path: inset(43% 0 1% 0);
    transform: translate(2px, -2px);
  }
  90% {
    clip-path: inset(25% 0 58% 0);
    transform: translate(-1px, 1px);
  }
  100% {
    clip-path: inset(58% 0 43% 0);
    transform: translate(0);
  }
`;

const glitch2 = keyframes`
  0% {
    clip-path: inset(25% 0 58% 0);
    transform: translate(0);
  }
  10% {
    clip-path: inset(54% 0 7% 0);
    transform: translate(2px, -2px);
  }
  20% {
    clip-path: inset(58% 0 43% 0);
    transform: translate(-2px, 2px);
  }
  30% {
    clip-path: inset(40% 0 61% 0);
    transform: translate(1px, -1px);
  }
  40% {
    clip-path: inset(92% 0 1% 0);
    transform: translate(-1px, 1px);
  }
  50% {
    clip-path: inset(43% 0 1% 0);
    transform: translate(3px, -3px);
  }
  60% {
    clip-path: inset(25% 0 58% 0);
    transform: translate(-3px, 3px);
  }
  70% {
    clip-path: inset(54% 0 7% 0);
    transform: translate(2px, -2px);
  }
  80% {
    clip-path: inset(58% 0 43% 0);
    transform: translate(-2px, 2px);
  }
  90% {
    clip-path: inset(40% 0 61% 0);
    transform: translate(1px, -1px);
  }
  100% {
    clip-path: inset(43% 0 1% 0);
    transform: translate(0);
  }
`;

const glitch3 = keyframes`
  0% {
    clip-path: inset(10% 0 85% 0);
    transform: translate(1px, -1px);
  }
  15% {
    clip-path: inset(75% 0 15% 0);
    transform: translate(-1px, 1px);
  }
  30% {
    clip-path: inset(20% 0 80% 0);
    transform: translate(2px, -2px);
  }
  45% {
    clip-path: inset(60% 0 30% 0);
    transform: translate(-2px, 2px);
  }
  60% {
    clip-path: inset(30% 0 70% 0);
    transform: translate(1px, -1px);
  }
  75% {
    clip-path: inset(80% 0 10% 0);
    transform: translate(-1px, 1px);
  }
  90% {
    clip-path: inset(15% 0 75% 0);
    transform: translate(2px, -2px);
  }
  100% {
    clip-path: inset(70% 0 20% 0);
    transform: translate(-2px, 2px);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(1.1);
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100vh);
  }
`;

const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #121212;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: ${props => props.isExiting ? slideUp : 'none'} 0.8s ease-in-out forwards;
`;



const LoaderImage = styled.img`
  max-width: 30%;
  max-height: 30%;
  object-fit: contain;
  opacity: 0.3;
  animation: ${props => props.isExiting ? fadeOut : fadeIn} 3s ease-in-out forwards;
`;

const GlitchOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/images/icon.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  animation: ${glitch1} 1.5s infinite linear alternate-reverse;
  z-index: 1;
  pointer-events: none;
`;

const GlitchOverlay2 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/images/icon.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  animation: ${glitch2} 2s infinite linear alternate-reverse;
  z-index: 2;
  pointer-events: none;
  mix-blend-mode: difference;
`;

const GlitchOverlay3 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/images/icon.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  animation: ${glitch3} 1.8s infinite linear alternate-reverse;
  z-index: 3;
  pointer-events: none;
  mix-blend-mode: overlay;
`;

const PageLoader = ({ onLoadingComplete }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        onLoadingComplete();
      }, 800);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <LoaderContainer isExiting={isExiting}>
      <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <LoaderImage 
          src="/images/icon.png" 
          alt="Portfolio Logo"
          isExiting={isExiting}
        />
        <GlitchOverlay />
        <GlitchOverlay2 />
        <GlitchOverlay3 />
      </div>
    </LoaderContainer>
  );
};

export default PageLoader;
