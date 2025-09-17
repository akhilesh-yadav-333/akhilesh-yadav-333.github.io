import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FaArrowRight } from 'react-icons/fa';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: #121212;
  position: relative;
  overflow: hidden;
`;

const FloatingBinary = styled.div`
  position: absolute;
  color: rgba(139, 0, 0, 0.4);
  font-family: 'Courier New', monospace;
  font-weight: bold;
  font-size: ${props => props.size}px;
  user-select: none;
  pointer-events: none;
  z-index: 0;
  animation: float ${props => props.duration}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;

  @keyframes float {
    0%, 100% { 
      transform: translateY(0px) translateX(0px) rotate(0deg);
      opacity: 0;
    }
    10% { 
      transform: translateY(-20px) translateX(10px) rotate(5deg);
      opacity: 0.8;
    }
    20% { 
      transform: translateY(-40px) translateX(-15px) rotate(-3deg);
      opacity: 0.6;
    }
    30% { 
      transform: translateY(-30px) translateX(5px) rotate(2deg);
      opacity: 0.9;
    }
    40% { 
      transform: translateY(-50px) translateX(20px) rotate(-5deg);
      opacity: 0.4;
    }
    50% { 
      transform: translateY(-25px) translateX(-10px) rotate(3deg);
      opacity: 0.7;
    }
    60% { 
      transform: translateY(-35px) translateX(15px) rotate(-2deg);
      opacity: 0.5;
    }
    70% { 
      transform: translateY(-45px) translateX(-5px) rotate(4deg);
      opacity: 0.8;
    }
    80% { 
      transform: translateY(-20px) translateX(25px) rotate(-1deg);
      opacity: 0.3;
    }
    90% { 
      transform: translateY(-30px) translateX(-20px) rotate(2deg);
      opacity: 0.6;
    }
  }
`;

const HeroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const HeroContent = styled.div`
  opacity: 0;
  transform: translateY(50px);
  transition: all 1.2s ease;

  &.animate {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Greeting = styled.p`
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 600;
  opacity: 0;
  transform: translateY(30px);
  transition: all 1.2s ease 0.2s;
  min-height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &.animate {
    opacity: 1;
    transform: translateY(0);
  }

  &::after {
    content: '|';
    animation: blink 1s infinite;
    margin-left: 2px;
  }
  
  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }
`;

const Name = styled.h1`
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 1rem;
  line-height: 1.1;
  min-height: clamp(2.5rem, 6vw, 4rem);
  position: relative;
  opacity: 0;
  transform: translateY(30px);
  transition: all 1.2s ease 0.4s;
  display: flex;
  align-items: center;
  justify-content: center;

  &.animate {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    min-height: 2.5rem;
  }
`;

const Title = styled.h2`
  font-size: clamp(1.2rem, 3vw, 2rem);
  font-weight: 600;
  color: #bdbdbd;
  margin-bottom: 2rem;
  line-height: 1.2;
  min-height: clamp(1.2rem, 3vw, 2rem);
  position: relative;
  white-space: nowrap;
  opacity: 0;
  transform: translateY(30px);
  transition: all 1.2s ease 0.6s;
  display: flex;
  align-items: center;
  justify-content: center;

  &.animate {
    opacity: 1;
    transform: translateY(0);
  }

  &::after {
    content: '|';
    color: #8B0000;
    animation: blink 1s infinite;
    margin-left: 2px;
  }
  
  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #9e9e9e;
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0;
  transform: translateY(30px);
  transition: all 1.2s ease 0.8s;
  min-height: 4.5rem;

  &.animate {
    opacity: 1;
    transform: translateY(0);
  }
`;

const CTAButton = styled.button`
  background: transparent;
  border: 2px solid #8B0000;
  color: #8B0000;
  padding: 1rem 2rem;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(30px);
  transition: all 1.2s ease 1s;

  &.animate {
    opacity: 1;
    transform: translateY(0);
  }

  &:hover {
    background: rgba(139, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`;

const Hero = () => {
  const [greeting, setGreeting] = useState('');
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [colorCycle, setColorCycle] = useState(0); // 0 = white, 1 = red
  const [hasShownName, setHasShownName] = useState(false);
  const heroRef = useRef(null);

  const fullGreeting = "Hello I'm";
  const fullName = "Akhilesh Yadav";
  const fullTitle = "Penetration Tester";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // Reset animation when element goes out of view
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const typewriter = () => {
      if (currentIndex === 0) {
        if (greeting.length < fullGreeting.length) {
          setGreeting(fullGreeting.slice(0, greeting.length + 1));
        } else {
          setCurrentIndex(1);
        }
      } else if (currentIndex === 1) {
        if (name.length < fullName.length) {
          setName(fullName.slice(0, name.length + 1));
        } else {
          setCurrentIndex(2);
          setHasShownName(true); // Mark that name has been shown
        }
      } else if (currentIndex === 2) {
        if (title.length < fullTitle.length) {
          setTitle(fullTitle.slice(0, title.length + 1));
        } else {
          // Wait 2 seconds then restart typewriter with color change
          setTimeout(() => {
            setGreeting('');
            setTitle('');
            setCurrentIndex(0);
            setColorCycle(prev => (prev + 1) % 2); // Toggle between 0 and 1
          }, 2000);
        }
      }
    };
    const timer = setTimeout(typewriter, 100);
    return () => clearTimeout(timer);
  }, [greeting, name, title, currentIndex, isVisible, colorCycle]);

  // Dynamic color based on color cycle
  const getTextColor = () => {
    return colorCycle === 0 ? '#ffffff' : '#8B0000';
  };

  return (
    <HeroSection id="home" ref={heroRef}>
      <HeroContainer>
        <HeroContent 
          className={isVisible ? 'animate' : ''}
        >
          <Greeting 
            className={isVisible ? 'animate' : ''}
            style={{ color: getTextColor() }}
          >
            {greeting}
          </Greeting>
          <Name 
            className={isVisible ? 'animate' : ''}
            style={{ color: hasShownName ? '#ffffff' : getTextColor() }}
          >
            {hasShownName ? fullName : name}
          </Name>
          <Title 
            className={isVisible ? 'animate' : ''}
            style={{ color: getTextColor() }}
          >
            {title}
          </Title>
          <Description className={isVisible ? 'animate' : ''}>
            Entry-level penetration tester with a strong foundation in vulnerability assessment and blue team defense, now specializing in offensive security. Hands-on experience in Kubernetes exploitation, reverse engineering, and full-stack pentesting through self-hosted labs, Kubernetes Goat, and pwn.college program security challenges.
          </Description>
          <CTAButton 
            className={isVisible ? 'animate' : ''}
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Appointment <FaArrowRight />
          </CTAButton>
        </HeroContent>
        
        {/* Floating Binary Background Elements */}
        <FloatingBinary 
          size={12} 
          duration={6} 
          delay={0} 
          style={{ top: '20%', left: '15%' }}
        >
          0
        </FloatingBinary>
        
        <FloatingBinary 
          size={18} 
          duration={8} 
          delay={1} 
          style={{ top: '30%', right: '20%' }}
        >
          1
        </FloatingBinary>
        
        <FloatingBinary 
          size={14} 
          duration={7} 
          delay={2} 
          style={{ top: '50%', left: '10%' }}
        >
          0
        </FloatingBinary>
        
        <FloatingBinary 
          size={16} 
          duration={9} 
          delay={3} 
          style={{ top: '60%', right: '15%' }}
        >
          1
        </FloatingBinary>
        
        <FloatingBinary 
          size={20} 
          duration={5} 
          delay={4} 
          style={{ top: '70%', left: '25%' }}
        >
          0
        </FloatingBinary>
        
        <FloatingBinary 
          size={13} 
          duration={10} 
          delay={1.5} 
          style={{ top: '80%', right: '30%' }}
        >
          1
        </FloatingBinary>
        
        <FloatingBinary 
          size={17} 
          duration={6.5} 
          delay={2.5} 
          style={{ top: '25%', left: '60%' }}
        >
          0
        </FloatingBinary>
        
        <FloatingBinary 
          size={11} 
          duration={8.5} 
          delay={3.5} 
          style={{ top: '45%', right: '40%' }}
        >
          1
        </FloatingBinary>
        
        <FloatingBinary 
          size={19} 
          duration={7.5} 
          delay={0.5} 
          style={{ top: '75%', left: '70%' }}
        >
          0
        </FloatingBinary>
        
        <FloatingBinary 
          size={15} 
          duration={9.5} 
          delay={4.5} 
          style={{ top: '35%', left: '80%' }}
        >
          1
        </FloatingBinary>

        {/* Additional 20 elements for 3x quantity */}
        <FloatingBinary 
          size={22} 
          duration={6.5} 
          delay={5} 
          style={{ top: '15%', left: '45%' }}
        >
          0
        </FloatingBinary>
        
        <FloatingBinary 
          size={16} 
          duration={8.2} 
          delay={5.5} 
          style={{ top: '40%', right: '60%' }}
        >
          1
        </FloatingBinary>
        
        <FloatingBinary 
          size={14} 
          duration={7.8} 
          delay={6} 
          style={{ top: '65%', left: '35%' }}
        >
          0
        </FloatingBinary>
        
        <FloatingBinary 
          size={18} 
          duration={9.2} 
          delay={6.5} 
          style={{ top: '85%', right: '45%' }}
        >
          1
        </FloatingBinary>
        
        <FloatingBinary 
          size={21} 
          duration={5.8} 
          delay={7} 
          style={{ top: '10%', left: '85%' }}
        >
          0
        </FloatingBinary>
        
        <FloatingBinary 
          size={13} 
          duration={10.5} 
          delay={7.5} 
          style={{ top: '55%', right: '75%' }}
        >
          1
        </FloatingBinary>
        
        <FloatingBinary 
          size={17} 
          duration={6.8} 
          delay={8} 
          style={{ top: '75%', left: '55%' }}
        >
          0
        </FloatingBinary>
        
        <FloatingBinary 
          size={12} 
          duration={8.8} 
          delay={8.5} 
          style={{ top: '25%', right: '85%' }}
        >
          1
        </FloatingBinary>
        
        <FloatingBinary 
          size={19} 
          duration={7.2} 
          delay={9} 
          style={{ top: '45%', left: '90%' }}
        >
          0
        </FloatingBinary>
        
        <FloatingBinary 
          size={15} 
          duration={9.8} 
          delay={9.5} 
          style={{ top: '90%', right: '10%' }}
        >
          1
        </FloatingBinary>
        
        <FloatingBinary 
          size={23} 
          duration={6.2} 
          delay={10} 
          style={{ top: '5%', left: '30%' }}
        >
          0
        </FloatingBinary>
        
        <FloatingBinary 
          size={16} 
          duration={8.6} 
          delay={10.5} 
          style={{ top: '35%', right: '90%' }}
        >
          1
        </FloatingBinary>
        
        <FloatingBinary 
          size={14} 
          duration={7.4} 
          delay={11} 
          style={{ top: '60%', left: '5%' }}
        >
          0
        </FloatingBinary>
        
        <FloatingBinary 
          size={18} 
          duration={9.4} 
          delay={11.5} 
          style={{ top: '80%', right: '60%' }}
        >
          1
        </FloatingBinary>
        
        <FloatingBinary 
          size={20} 
          duration={5.6} 
          delay={12} 
          style={{ top: '20%', left: '75%' }}
        >
          0
        </FloatingBinary>
        
        <FloatingBinary 
          size={13} 
          duration={10.2} 
          delay={12.5} 
          style={{ top: '50%', right: '5%' }}
        >
          1
        </FloatingBinary>
        
        <FloatingBinary 
          size={17} 
          duration={6.4} 
          delay={13} 
          style={{ top: '70%', left: '90%' }}
        >
          0
        </FloatingBinary>
        
        <FloatingBinary 
          size={11} 
          duration={8.4} 
          delay={13.5} 
          style={{ top: '30%', right: '50%' }}
        >
          1
        </FloatingBinary>
        
        <FloatingBinary 
          size={19} 
          duration={7.6} 
          delay={14} 
          style={{ top: '85%', left: '40%' }}
        >
          0
        </FloatingBinary>
        
        <FloatingBinary 
          size={15} 
          duration={9.6} 
          delay={14.5} 
          style={{ top: '15%', right: '35%' }}
        >
          1
        </FloatingBinary>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
