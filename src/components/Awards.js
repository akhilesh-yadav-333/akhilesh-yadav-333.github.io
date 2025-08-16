import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FaTrophy, FaCertificate, FaMedal, FaStar, FaAward, FaRibbon } from 'react-icons/fa';

const AwardsSection = styled.section`
  padding: 100px 0;
  background: #121212;
  position: relative;
`;

const AwardsContainer = styled.div`
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

const AwardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const AwardCard = styled.div`
  background: rgba(30, 30, 30, 0.8);
  border: 1px solid rgba(139, 0, 0, 0.2);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(50px);
  transition: all 1.2s ease;

  &.animate {
    opacity: 1;
    transform: translateY(0);
  }

  &:hover {
    transform: translateY(-10px);
    border-color: #8B0000;
    box-shadow: 0 20px 40px rgba(139, 0, 0, 0.15);
  }
`;

const AwardIcon = styled.div`
  font-size: 3rem;
  color: #8B0000;
  margin-bottom: 1.5rem;
`;

const AwardTitle = styled.h3`
  color: #ffffff;
  font-size: 1.3rem;
  margin-bottom: 1rem;
`;

const AwardDescription = styled.p`
  color: #9e9e9e;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const AwardDate = styled.span`
  color: #8B0000;
  font-size: 0.9rem;
  font-weight: 600;
`;

const AchievementsContainer = styled.div`
  opacity: 0;
  transform: translateY(50px);
  transition: all 1.2s ease 0.8s;

  &.animate {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AchievementsTitle = styled.h3`
  font-size: 2rem;
  color: #ffffff;
  text-align: center;
  margin-bottom: 3rem;
`;

const AchievementsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const AchievementItem = styled.div`
  text-align: center;
  opacity: 0;
  transform: scale(0.8);
  transition: all 1.2s ease;

  &.animate {
    opacity: 1;
    transform: scale(1);
  }
`;

const AchievementNumber = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: #8B0000;
  margin-bottom: 0.5rem;
`;

const AchievementLabel = styled.div`
  color: #9e9e9e;
  font-size: 1rem;
`;

const Awards = () => {
  const [isVisible, setIsVisible] = useState(false);
  const awardsRef = useRef(null);

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

    if (awardsRef.current) {
      observer.observe(awardsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const awards = [
    {
      icon: <FaCertificate />,
      title: "Certified Ethical Hacker (CEH)",
      description: "EC-Council certification demonstrating expertise in ethical hacking, penetration testing, and security assessment methodologies.",
      date: "August 2023"
    },
    {
      icon: <FaTrophy />,
      title: "Certified in Cybersecurity (CC)",
      description: "(ISC)² certification validating foundational cybersecurity knowledge and professional competence in the field.",
      date: "December 2023"
    },
    {
      icon: <FaMedal />,
      title: "Security Engineer at Veltris",
      description: "Leading security operations, SIEM management, and DevSecOps initiatives for enterprise clients.",
      date: "May 2024 - Present"
    },
    {
      icon: <FaStar />,
      title: "SOC Analyst Experience",
      description: "24/7 security monitoring, incident response, and threat analysis in enterprise environments.",
      date: "December 2022 - May 2024"
    },
    {
      icon: <FaAward />,
      title: "Red Team Enthusiast",
      description: "Active participation in CTF challenges, TryHackMe, and HackTheBox for continuous skill development.",
      date: "Ongoing"
    },
    {
      icon: <FaRibbon />,
      title: "Bachelor's in Computer Science",
      description: "Graduated from SVCE, Bangalore with focus on cybersecurity and engineering principles.",
      date: "2018-2022"
    }
  ];

  const achievements = [
    { number: "2+", label: "Years Security Experience" },
    { number: "3+", label: "Security Certifications" },
    { number: "10+", label: "Security Tools Mastered" },
    { number: "24/7", label: "SOC Operations" }
  ];

  return (
    <AwardsSection id="awards" ref={awardsRef}>
      <AwardsContainer>
        <SectionTitle 
          className={isVisible ? 'animate' : ''}
        >
          Awards & Achievements
        </SectionTitle>
        
        <SectionSubtitle 
          className={isVisible ? 'animate' : ''}
        >
          Recognition for my work and dedication
        </SectionSubtitle>

        <AwardsGrid>
          {awards.map((award, index) => (
            <AwardCard 
              key={index}
              className={isVisible ? 'animate' : ''}
            >
              <AwardIcon>{award.icon}</AwardIcon>
              <AwardTitle>{award.title}</AwardTitle>
              <AwardDescription>{award.description}</AwardDescription>
              <AwardDate>{award.date}</AwardDate>
            </AwardCard>
          ))}
        </AwardsGrid>

        <AchievementsContainer className={isVisible ? 'animate' : ''}>
          <AchievementsTitle>Key Achievements</AchievementsTitle>
          <AchievementsGrid>
            {achievements.map((achievement, index) => (
              <AchievementItem 
                key={index}
                className={isVisible ? 'animate' : ''}
              >
                <AchievementNumber>{achievement.number}</AchievementNumber>
                <AchievementLabel>{achievement.label}</AchievementLabel>
              </AchievementItem>
            ))}
          </AchievementsGrid>
        </AchievementsContainer>
      </AwardsContainer>
    </AwardsSection>
  );
};

export default Awards;
