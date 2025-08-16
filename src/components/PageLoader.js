import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

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

const LoaderContent = styled.div`
  text-align: center;
  animation: ${props => props.isExiting ? fadeOut : fadeIn} 0.8s ease-in-out;
`;

const LoaderLogo = styled.div`
  font-size: 3rem;
  font-weight: 800;
  color: #8B0000;
  margin-bottom: 1rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 3px;
    background: #8B0000;
    animation: expandLine 1.5s ease-in-out 0.5s forwards;
  }

  @keyframes expandLine {
    to {
      width: 100%;
    }
  }
`;

const LoaderText = styled.p`
  color: #9e9e9e;
  font-size: 1rem;
  margin: 0;
  opacity: 0;
  animation: fadeInText 0.8s ease-in-out 1s forwards;
  
  @keyframes fadeInText {
    to {
      opacity: 1;
    }
  }
`;

const ProgressBar = styled.div`
  width: 200px;
  height: 2px;
  background: rgba(139, 0, 0, 0.2);
  border-radius: 1px;
  margin: 2rem auto 0;
  overflow: hidden;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    background: #8B0000;
    animation: progress 2s ease-in-out forwards;
  }
  
  @keyframes progress {
    0% {
      width: 0;
    }
    50% {
      width: 60%;
    }
    100% {
      width: 100%;
    }
  }
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
      <LoaderContent isExiting={isExiting}>
        <LoaderLogo>Portfolio</LoaderLogo>
        <LoaderText>Loading amazing things...</LoaderText>
        <ProgressBar />
      </LoaderContent>
    </LoaderContainer>
  );
};

export default PageLoader;
