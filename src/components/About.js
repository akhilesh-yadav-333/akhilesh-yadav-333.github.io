import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FaShieldAlt, FaCode, FaRocket } from 'react-icons/fa';

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
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease'
          }}
        >
          About Me
        </SectionTitle>
        
        <SectionSubtitle 
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease 0.2s'
          }}
        >
          Get to know me better
        </SectionSubtitle>

        <AboutContent>
          <AboutText 
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
              transition: 'all 0.8s ease 0.4s'
            }}
          >
            <AboutParagraph>
              I'm Akhilesh Yadav, a Security Engineer with robust hands-on experience in cloud security, email security, SIEM/EDR platforms (Splunk, QRadar, CrowdStrike), and security automation. Skilled in incident response, threat detection (MITRE ATT&CK), vulnerability management, and secure configurations in AWS environments.
            </AboutParagraph>
            <AboutParagraph>
              With a strong scripting background (Python, Bash), I specialize in DevSecOps pipelines, compliance (ISO 27001, NIST RMF), and WAF optimization. I've demonstrated success in streamlining SOC operations, building security policies, and improving threat visibility across diverse infrastructures.
            </AboutParagraph>
            <AboutParagraph>
              Currently working as a Security Engineer at Veltris, I'm passionate about offensive security and continuously learning through platforms like TryHackMe, HackTheBox, and CTF challenges to stay current with emerging threats and response strategies.
            </AboutParagraph>
          </AboutText>

          <SkillsContainer 
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
              transition: 'all 0.8s ease 0.6s'
            }}
          >
            <SkillCard>
              <SkillIcon>
                <FaShieldAlt />
              </SkillIcon>
              <SkillTitle>Security Expertise</SkillTitle>
              <SkillDescription>
                Comprehensive knowledge in cybersecurity, penetration testing, and security operations
              </SkillDescription>
            </SkillCard>

            <SkillCard>
              <SkillIcon>
                <FaCode />
              </SkillIcon>
              <SkillTitle>Technical Skills</SkillTitle>
              <SkillDescription>
                Proficient in Python, Bash, PowerShell, and various security tools and platforms
              </SkillDescription>
            </SkillCard>

            <SkillCard>
              <SkillIcon>
                <FaRocket />
              </SkillIcon>
              <SkillTitle>Red Team</SkillTitle>
              <SkillDescription>
                Specialized in offensive security, CTF challenges, and penetration testing
              </SkillDescription>
            </SkillCard>
          </SkillsContainer>
        </AboutContent>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
