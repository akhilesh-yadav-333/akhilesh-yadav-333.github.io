import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FaShieldAlt, FaCode, FaRocket } from 'react-icons/fa';

const AboutSection = styled.section`
  padding: 100px 0;
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

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  color: #ffffff;
  text-align: center;
  margin-bottom: 1rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 1.2s ease;

  &.animate {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: #8B0000;
  text-align: center;
  margin-bottom: 4rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 1.2s ease 0.2s;

  &.animate {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutBlock = styled.div`
  text-align: center;
  opacity: 0;
  transform: translateY(30px);
  transition: all 1.2s ease;

  &.animate {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AboutIcon = styled.div`
  font-size: 3rem;
  color: #8B0000;
  margin-bottom: 1.5rem;
`;

const AboutBlockTitle = styled.h3`
  color: #ffffff;
  font-size: 1.4rem;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const AboutBlockText = styled.p`
  color: #9e9e9e;
  line-height: 1.6;
  font-size: 1rem;
`;

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

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

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <AboutSection id="about" ref={aboutRef}>
      <AboutContainer>
        <SectionTitle 
          className={isVisible ? 'animate' : ''}
        >
          About Me
        </SectionTitle>
        
        <SectionSubtitle 
          className={isVisible ? 'animate' : ''}
        >
          Get to know me better
        </SectionSubtitle>

        <AboutContent>
          <AboutBlock 
            className={isVisible ? 'animate' : ''}
          >
            <AboutIcon>
              <FaShieldAlt />
            </AboutIcon>
            <AboutBlockTitle>Blue Team</AboutBlockTitle>
            <AboutBlockText>
              Defensive security operations, incident response, and threat monitoring expertise
            </AboutBlockText>
          </AboutBlock>

          <AboutBlock 
            className={isVisible ? 'animate' : ''}
          >
            <AboutIcon>
              <FaCode />
            </AboutIcon>
            <AboutBlockTitle>Security Expertise</AboutBlockTitle>
            <AboutBlockText>
              Comprehensive knowledge in cybersecurity, penetration testing, and security operations
            </AboutBlockText>
          </AboutBlock>

          <AboutBlock 
            className={isVisible ? 'animate' : ''}
          >
            <AboutIcon>
              <FaRocket />
            </AboutIcon>
            <AboutBlockTitle>Red Team</AboutBlockTitle>
            <AboutBlockText>
              Specialized in offensive security, CTF challenges, and penetration testing
            </AboutBlockText>
          </AboutBlock>
        </AboutContent>

        {/* Floating Binary Background Elements for About Section */}
        <FloatingBinary 
          size={14} 
          duration={7.2} 
          delay={0} 
          style={{ top: '10%', left: '5%' }}
        >
          0
        </FloatingBinary>
        
        <FloatingBinary 
          size={19} 
          duration={8.8} 
          delay={1.2} 
          style={{ top: '20%', right: '8%' }}
        >
          1
        </FloatingBinary>
        
        <FloatingBinary 
          size={16} 
          duration={6.5} 
          delay={2.8} 
          style={{ top: '60%', left: '12%' }}
        >
          0
        </FloatingBinary>
        
        <FloatingBinary 
          size={21} 
          duration={9.4} 
          delay={1.8} 
          style={{ top: '70%', right: '15%' }}
        >
          1
        </FloatingBinary>
        
        <FloatingBinary 
          size={13} 
          duration={7.8} 
          delay={3.2} 
          style={{ top: '40%', left: '85%' }}
        >
          0
        </FloatingBinary>
        
        <FloatingBinary 
          size={18} 
          duration={8.2} 
          delay={0.8} 
          style={{ top: '50%', right: '85%' }}
        >
          1
        </FloatingBinary>
        
        <FloatingBinary 
          size={15} 
          duration={6.8} 
          delay={2.4} 
          style={{ top: '80%', left: '75%' }}
        >
          0
        </FloatingBinary>
        
        <FloatingBinary 
          size={20} 
          duration={9.6} 
          delay={1.6} 
          style={{ top: '30%', right: '75%' }}
        >
          1
        </FloatingBinary>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
