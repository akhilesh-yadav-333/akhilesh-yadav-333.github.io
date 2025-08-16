import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaArrowRight } from 'react-icons/fa';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 50%, rgba(139, 0, 0, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(139, 0, 0, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const HeroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
`;

const HeroContent = styled.div`
  z-index: 1;
`;

const Greeting = styled.p`
  color: #8B0000;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 1rem;
  min-height: 1.5rem;
`;

const Name = styled.h1`
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 1rem;
  line-height: 1.1;
  min-height: clamp(3rem, 8vw, 5rem);
  position: relative;

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

  @media (max-width: 768px) {
    font-size: 3rem;
    min-height: 3rem;
  }
`;

const Title = styled.h2`
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 600;
  color: #bdbdbd;
  margin-bottom: 2rem;
  line-height: 1.2;
  min-height: clamp(1.5rem, 4vw, 2.5rem);
  position: relative;

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
  margin-bottom: 2.5rem;
  max-width: 500px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const CTAButton = styled.button`
  background: #8B0000;
  color: #ffffff;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: #660000;
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(139, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

const HeroImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  position: relative;
`;

const PhotoContainer = styled.div`
  position: relative;
  width: 400px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 300px;
    height: 375px;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  position: relative;
  z-index: 2;
`;

const DesignElement1 = styled.div`
  position: absolute;
  top: -20px;
  left: -30px;
  width: 150px;
  height: 150px;
  background: rgba(139, 0, 0, 0.3);
  border-radius: 50%;
  z-index: 1;
  animation: float 6s ease-in-out infinite;

  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-15px) rotate(5deg); }
  }
`;

const DesignElement2 = styled.div`
  position: absolute;
  bottom: -15px;
  right: -25px;
  width: 100px;
  height: 100px;
  background: rgba(139, 0, 0, 0.2);
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  z-index: 1;
  animation: float 8s ease-in-out infinite reverse;
`;

const DesignElement3 = styled.div`
  position: absolute;
  top: 50%;
  left: -40px;
  width: 80px;
  height: 120px;
  background: rgba(139, 0, 0, 0.15);
  border-radius: 40px 40px 0 0;
  z-index: 1;
  animation: float 7s ease-in-out infinite;
`;

const DesignElement4 = styled.div`
  position: absolute;
  bottom: 30%;
  left: -20px;
  width: 70px;
  height: 70px;
  background: rgba(139, 0, 0, 0.25);
  border-radius: 50%;
  z-index: 1;
  animation: float 5s ease-in-out infinite reverse;
`;

const DesignElement5 = styled.div`
  position: absolute;
  top: 20%;
  right: -35px;
  width: 90px;
  height: 90px;
  background: rgba(139, 0, 0, 0.2);
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  z-index: 1;
  animation: float 9s ease-in-out infinite;
`;

const LeftShoulderCover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 25%;
  height: 100%;
  background: linear-gradient(135deg, rgba(18, 18, 18, 0.8) 0%, rgba(18, 18, 18, 0.2) 100%);
  z-index: 3;
  border-radius: 0 20px 20px 0;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at left center, rgba(139, 0, 0, 0.1) 0%, transparent 70%);
  }
`;

const OrganicBorder = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  width: 120px;
  height: 120px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  z-index: 1;
  animation: float 10s ease-in-out infinite;
`;

const OrganicBorder2 = styled.div`
  position: absolute;
  bottom: -15px;
  left: -20px;
  width: 100px;
  height: 80px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 40% 60% 60% 40% / 40% 40% 60% 60%;
  z-index: 1;
  animation: float 8s ease-in-out infinite reverse;
`;

const Hero = () => {
  const [greeting, setGreeting] = useState('');
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const fullGreeting = "Hello I'm";
  const fullName = "Your Name";
  const fullTitle = "Your Professional Title";

  useEffect(() => {
    const typewriter = () => {
      if (currentIndex === 0) {
        // Type greeting
        if (greeting.length < fullGreeting.length) {
          setGreeting(fullGreeting.slice(0, greeting.length + 1));
        } else {
          setCurrentIndex(1);
        }
      } else if (currentIndex === 1) {
        // Type name
        if (name.length < fullName.length) {
          setName(fullName.slice(0, name.length + 1));
        } else {
          setCurrentIndex(2);
        }
      } else if (currentIndex === 2) {
        // Type title
        if (title.length < fullTitle.length) {
          setTitle(fullTitle.slice(0, title.length + 1));
        }
      }
    };

    const timer = setTimeout(typewriter, 100);
    return () => clearTimeout(timer);
  }, [greeting, name, title, currentIndex]);

  return (
    <HeroSection id="home">
      <HeroContainer>
        <HeroContent>
          <Greeting>{greeting}</Greeting>
          <Name>{name}</Name>
          <Title>{title}</Title>
          <Description>
            I'm a passionate professional ready to bring your ideas to life. 
            With expertise in my field, I create innovative solutions that 
            make a difference. Let's work together to achieve your goals.
          </Description>
          <CTAButton>
            Get Started <FaArrowRight />
          </CTAButton>
        </HeroContent>
        
        <HeroImage>
          <PhotoContainer>
            <DesignElement1 />
            <DesignElement2 />
            <DesignElement3 />
            <DesignElement4 />
            <DesignElement5 />
            <OrganicBorder />
            <OrganicBorder2 />
            <ProfileImage 
              src="/images/profile-photo.jpg" 
              alt="Professional headshot"
            />
            <LeftShoulderCover />
          </PhotoContainer>
        </HeroImage>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
