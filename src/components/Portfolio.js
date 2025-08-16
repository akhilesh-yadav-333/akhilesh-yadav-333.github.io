import React, { useState, useEffect, useRef } from 'react';
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

const ProjectImagePlaceholder = styled.div`
  color: #8B0000;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  padding: 1rem;
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
  const [isVisible, setIsVisible] = useState(false);
  const portfolioRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (portfolioRef.current) {
      observer.observe(portfolioRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "Client Pentest Engagement",
      description: "Conducted a full vulnerability assessment and penetration test for a client environment. Included reconnaissance, exploitation, post-exploitation, and reporting. Delivered executive summary, technical details, and actionable remediation steps.",
      image: "Client Pentest",
      tech: ["Burp Suite", "OWASP ZAP", "Nmap", "SQLmap"],
      category: "pentesting",
      live: "#",
      github: "#"
    },
    {
      id: 2,
      title: "Kubernetes Goat Exploitation",
      description: "Gained cluster admin by exploiting RBAC misconfigurations, API abuse, and privilege escalation in simulated Kubernetes environments. Demonstrated cloud security expertise and container exploitation techniques.",
      image: "Kubernetes Security",
      tech: ["Kubernetes", "Docker", "RBAC", "API Security"],
      category: "cloud",
      live: "#",
      github: "#"
    },
    {
      id: 3,
      title: "Reverse Engineering (pwn.college)",
      description: "Completed program security modules: assembly analysis, binary patching, and exploit crafting. Developed skills in Ghidra, Radare2, and binary exploitation techniques.",
      image: "Reverse Engineering",
      tech: ["Ghidra", "Radare2", "Assembly", "Binary Exploitation"],
      category: "reverse",
      live: "#",
      github: "#"
    },
    {
      id: 4,
      title: "Self-Hosted Pentest Lab",
      description: "Built & exploited DVWA, Juice Shop, and Active Directory network; tested privilege escalation and persistence techniques. Created comprehensive testing environment for security research.",
      image: "Pentest Lab",
      tech: ["DVWA", "Juice Shop", "Active Directory", "Metasploit"],
      category: "pentesting",
      live: "#",
      github: "#"
    },
    {
      id: 5,
      title: "AWS Cloud Pentest",
      description: "Exploited IAM role misconfigurations, S3 bucket exposures, and Lambda function abuse. Demonstrated cloud security assessment capabilities and AWS exploitation techniques.",
      image: "AWS Security",
      tech: ["AWS", "IAM", "S3", "Lambda"],
      category: "cloud",
      live: "#",
      github: "#"
    },
    {
      id: 6,
      title: "SIEM Dashboard Development",
      description: "Created multiple dashboards to improve monitoring metrics around security checks. Led dashboard development for security control, user activity monitoring for insider threat and phishing mail attempts matrix.",
      image: "SIEM Dashboards",
      tech: ["Splunk", "QRadar", "Dashboarding", "Security Metrics"],
      category: "soc",
      live: "#",
      github: "#"
    }
  ];

  const filters = [
    { key: 'all', label: 'All' },
    { key: 'pentesting', label: 'Penetration Testing' },
    { key: 'cloud', label: 'Cloud Security' },
    { key: 'reverse', label: 'Reverse Engineering' },
    { key: 'soc', label: 'Security Operations' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <PortfolioSection id="portfolio" ref={portfolioRef}>
      <PortfolioContainer>
        <SectionTitle 
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease'
          }}
        >
          Some Things I've Built
        </SectionTitle>
        
        <SectionSubtitle 
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease 0.2s'
          }}
        >
          A selection of my recent work and projects
        </SectionSubtitle>

        <FilterButtons 
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease 0.4s'
          }}
        >
          {filters.map((filter) => (
            <FilterButton
              key={filter.key}
              active={activeFilter === filter.key}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </FilterButton>
          ))}
        </FilterButtons>

        <PortfolioGrid 
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease 0.6s'
          }}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                transition: `all 0.8s ease ${0.6 + index * 0.1}s`
              }}
            >
              <ProjectImage>
                <ProjectImagePlaceholder>{project.image}</ProjectImagePlaceholder>
              </ProjectImage>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectTech>
                  {project.tech.map((tech, techIndex) => (
                    <TechTag key={techIndex}>{tech}</TechTag>
                  ))}
                </ProjectTech>
                <ProjectLinks>
                  <ProjectLink href={project.live} target="_blank" rel="noopener noreferrer">
                    <FaEye /> View Details
                  </ProjectLink>
                  <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> Learn More
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
