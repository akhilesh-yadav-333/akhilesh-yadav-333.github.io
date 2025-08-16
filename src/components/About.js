import React from 'react';
import styled from 'styled-components';
import { FaUser, FaCode, FaLightbulb } from 'react-icons/fa';

const AboutSection = styled.section`
  padding: 5rem 2rem;
  background: #1e1e1e;
`;

const AboutContainer = styled.div`
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

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutText = styled.div`
  color: #9e9e9e;
  line-height: 1.8;
`;

const AboutParagraph = styled.p`
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const SkillCard = styled.div`
  background: rgba(139, 0, 0, 0.05);
  border: 1px solid rgba(139, 0, 0, 0.2);
  border-radius: 10px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: #8B0000;
    box-shadow: 0 10px 30px rgba(139, 0, 0, 0.1);
  }
`;

const SkillIcon = styled.div`
  font-size: 2.5rem;
  color: #8B0000;
  margin-bottom: 1rem;
`;

const SkillTitle = styled.h3`
  color: #ffffff;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
`;

const SkillDescription = styled.p`
  color: #9e9e9e;
  font-size: 0.9rem;
  line-height: 1.6;
`;

const About = () => {
  return (
    <AboutSection id="about">
      <AboutContainer>
        <SectionTitle>About Me</SectionTitle>
        <SectionSubtitle>Get to know me better</SectionSubtitle>
        
        <AboutContent>
          <AboutText>
            <AboutParagraph>
              I'm a passionate and dedicated professional with a strong foundation in my field. 
              I believe in continuous learning and staying up-to-date with the latest trends 
              and technologies.
            </AboutParagraph>
            <AboutParagraph>
              With several years of experience, I've worked on various projects that have 
              helped me develop a diverse skill set. I'm always looking for new challenges 
              and opportunities to grow both personally and professionally.
            </AboutParagraph>
            <AboutParagraph>
              When I'm not working, you can find me exploring new technologies, contributing 
              to open-source projects, or sharing knowledge with the community.
            </AboutParagraph>
          </AboutText>
          
          <SkillsContainer>
            <SkillCard>
              <SkillIcon>
                <FaUser />
              </SkillIcon>
              <SkillTitle>Personal</SkillTitle>
              <SkillDescription>
                Dedicated, creative, and always eager to learn new things
              </SkillDescription>
            </SkillCard>
            
            <SkillCard>
              <SkillIcon>
                <FaCode />
              </SkillIcon>
              <SkillTitle>Technical</SkillTitle>
              <SkillDescription>
                Strong problem-solving skills and technical expertise
              </SkillDescription>
            </SkillCard>
            
            <SkillCard>
              <SkillIcon>
                <FaLightbulb />
              </SkillIcon>
              <SkillTitle>Innovation</SkillTitle>
              <SkillDescription>
                Creative thinking and innovative approach to challenges
              </SkillDescription>
            </SkillCard>
          </SkillsContainer>
        </AboutContent>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
