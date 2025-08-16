import React, { useState } from 'react';
import styled from 'styled-components';
import { FaGithub, FaEye } from 'react-icons/fa';

const PortfolioSection = styled.section`
  padding: 5rem 2rem;
  background: #1e1e1e;
`;

const PortfolioContainer = styled.div`
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

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  background: ${props => props.active ? '#8B0000' : 'transparent'};
  color: ${props => props.active ? '#ffffff' : '#8B0000'};
  border: 2px solid #8B0000;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: #8B0000;
    color: #ffffff;
    transform: translateY(-2px);
  }
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled.div`
  background: rgba(139, 0, 0, 0.05);
  border: 1px solid rgba(139, 0, 0, 0.2);
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    border-color: #8B0000;
    box-shadow: 0 20px 40px rgba(139, 0, 0, 0.15);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  background: linear-gradient(135deg, #2d2d2d 0%, #1e1e1e 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8B0000;
  font-size: 1.2rem;
  border-bottom: 1px solid rgba(139, 0, 0, 0.2);
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  color: #ffffff;
  font-size: 1.3rem;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: #9e9e9e;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background: rgba(139, 0, 0, 0.1);
  color: #8B0000;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  border: 1px solid rgba(139, 0, 0, 0.3);
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  color: #8B0000;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  transition: color 0.3s ease;

  &:hover {
    color: #660000;
  }
`;

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with modern UI/UX, payment integration, and admin dashboard.",
      image: "E-Commerce Platform",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "web",
      live: "#",
      github: "#"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication and real-time transactions.",
      image: "Mobile Banking App",
      tech: ["React Native", "Firebase", "Redux", "Biometrics"],
      category: "mobile",
      live: "#",
      github: "#"
    },
    {
      id: 3,
      title: "AI Chatbot",
      description: "Intelligent chatbot powered by machine learning for customer support automation.",
      image: "AI Chatbot",
      tech: ["Python", "TensorFlow", "NLP", "FastAPI"],
      category: "ai",
      live: "#",
      github: "#"
    },
    {
      id: 4,
      title: "Data Analytics Dashboard",
      description: "Comprehensive dashboard for visualizing and analyzing business metrics and KPIs.",
      image: "Data Analytics Dashboard",
      tech: ["Vue.js", "D3.js", "Python", "PostgreSQL"],
      category: "web",
      live: "#",
      github: "#"
    },
    {
      id: 5,
      title: "IoT Smart Home",
      description: "Connected home automation system with mobile app control and sensor monitoring.",
      image: "IoT Smart Home",
      tech: ["Arduino", "ESP32", "React Native", "MQTT"],
      category: "iot",
      live: "#",
      github: "#"
    },
    {
      id: 6,
      title: "Blockchain Wallet",
      description: "Secure cryptocurrency wallet with multi-chain support and transaction history.",
      image: "Blockchain Wallet",
      tech: ["Web3.js", "Solidity", "React", "MetaMask"],
      category: "blockchain",
      live: "#",
      github: "#"
    }
  ];

  const filters = [
    { key: 'all', label: 'All' },
    { key: 'web', label: 'Web Apps' },
    { key: 'mobile', label: 'Mobile Apps' },
    { key: 'ai', label: 'AI/ML' },
    { key: 'iot', label: 'IoT' },
    { key: 'blockchain', label: 'Blockchain' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <PortfolioSection id="portfolio">
      <PortfolioContainer>
        <SectionTitle>Portfolio</SectionTitle>
        <SectionSubtitle>Some of my recent work</SectionSubtitle>
        
        <FilterButtons>
          {filters.map(filter => (
            <FilterButton
              key={filter.key}
              active={activeFilter === filter.key}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </FilterButton>
          ))}
        </FilterButtons>
        
        <PortfolioGrid>
          {filteredProjects.map(project => (
            <ProjectCard key={project.id}>
              <ProjectImage>{project.image}</ProjectImage>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectTech>
                  {project.tech.map((tech, index) => (
                    <TechTag key={index}>{tech}</TechTag>
                  ))}
                </ProjectTech>
                <ProjectLinks>
                  <ProjectLink href={project.live} target="_blank" rel="noopener noreferrer">
                    <FaEye /> Live Demo
                  </ProjectLink>
                  <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> Code
                  </ProjectLink>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </PortfolioGrid>
      </PortfolioContainer>
    </PortfolioSection>
  );
};

export default Portfolio;
