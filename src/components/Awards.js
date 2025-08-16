import React from 'react';
import styled from 'styled-components';
import { FaTrophy, FaCertificate, FaMedal, FaStar, FaAward, FaRibbon } from 'react-icons/fa';

const AwardsSection = styled.section`
  padding: 5rem 2rem;
  background: #121212;
`;

const AwardsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #ffffff;
  text-align: center;
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled.p`
  color: #8B0000;
  text-align: center;
  font-size: 1.1rem;
  margin-bottom: 4rem;
`;

const AwardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const AwardCard = styled.div`
  background: rgba(139, 0, 0, 0.05);
  border: 1px solid rgba(139, 0, 0, 0.2);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(139, 0, 0, 0.1), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    transform: translateY(-10px);
    border-color: #8B0000;
    box-shadow: 0 20px 40px rgba(139, 0, 0, 0.15);

    &::before {
      left: 100%;
    }
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

const AchievementSection = styled.div`
  margin-top: 4rem;
  text-align: center;
`;

const AchievementTitle = styled.h3`
  color: #ffffff;
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const AchievementGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const AchievementItem = styled.div`
  text-align: center;
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
  const awards = [
    {
      icon: <FaTrophy />,
      title: "Best Developer Award",
      description: "Recognized for outstanding contributions to open-source projects and innovative solutions.",
      date: "2024"
    },
    {
      icon: <FaCertificate />,
      title: "AWS Solutions Architect",
      description: "Certified professional with expertise in cloud architecture and deployment strategies.",
      date: "2023"
    },
    {
      icon: <FaMedal />,
      title: "Innovation Excellence",
      description: "Awarded for developing cutting-edge solutions that solve real-world problems.",
      date: "2023"
    },
    {
      icon: <FaStar />,
      title: "Top Performer",
      description: "Consistently delivered high-quality work and exceeded project expectations.",
      date: "2022"
    },
    {
      icon: <FaAward />,
      title: "Technical Leadership",
      description: "Recognized for mentoring team members and driving technical excellence.",
      date: "2022"
    },
    {
      icon: <FaRibbon />,
      title: "Community Contributor",
      description: "Active contributor to developer communities and open-source projects.",
      date: "2021"
    }
  ];

  const achievements = [
    { number: "50+", label: "Projects Completed" },
    { number: "100+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "25+", label: "Technologies" }
  ];

  return (
    <AwardsSection id="awards">
      <AwardsContainer>
        <SectionTitle>Awards & Recognition</SectionTitle>
        <SectionSubtitle>My achievements and certifications</SectionSubtitle>
        
        <AwardsGrid>
          {awards.map((award, index) => (
            <AwardCard key={index}>
              <AwardIcon>{award.icon}</AwardIcon>
              <AwardTitle>{award.title}</AwardTitle>
              <AwardDescription>{award.description}</AwardDescription>
              <AwardDate>{award.date}</AwardDate>
            </AwardCard>
          ))}
        </AwardsGrid>

        <AchievementSection>
          <AchievementTitle>Key Achievements</AchievementTitle>
          <AchievementGrid>
            {achievements.map((achievement, index) => (
              <AchievementItem key={index}>
                <AchievementNumber>{achievement.number}</AchievementNumber>
                <AchievementLabel>{achievement.label}</AchievementLabel>
              </AchievementItem>
            ))}
          </AchievementGrid>
        </AchievementSection>
      </AwardsContainer>
    </AwardsSection>
  );
};

export default Awards;
