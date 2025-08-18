import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';

const ExperienceSection = styled.section`
  padding: 100px 0;
  background: #121212;
  position: relative;
  overflow: hidden;
`;

const ExperienceContainer = styled.div`
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

const TimelineContainer = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(180deg, #8B0000 0%, rgba(139, 0, 0, 0.3) 100%);
    transform: translateX(-50%);

    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 3rem;
  opacity: 0;
  transform: translateY(50px);
  transition: all 1.2s ease;

  &.animate {
    opacity: 1;
    transform: translateY(0);
  }

  &:nth-child(odd) {
    .timeline-content {
      margin-left: 0;
      margin-right: 60px;
      text-align: right;

      @media (max-width: 768px) {
        margin-left: 60px;
        margin-right: 0;
        text-align: left;
      }
    }

    .timeline-dot {
      left: calc(50% - 15px);

      @media (max-width: 768px) {
        left: 20px;
      }
    }
  }

  &:nth-child(even) {
    .timeline-content {
      margin-left: 60px;
      margin-right: 0;
      text-align: left;

      @media (max-width: 768px) {
        margin-left: 60px;
        margin-right: 0;
        text-align: left;
      }
    }

    .timeline-dot {
      right: calc(50% - 15px);

      @media (max-width: 768px) {
        left: 20px;
      }
    }
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  background: #8B0000;
  border: 4px solid #121212;
  border-radius: 50%;
  top: 0;
  z-index: 2;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    width: 50px;
    height: 50px;
    background: rgba(139, 0, 0, 0.2);
    border-radius: 50%;
    top: -10px;
    left: -10px;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(1.5);
      opacity: 0;
    }
  }
`;

const TimelineContent = styled.div`
  padding: 1.8rem;
  transition: all 0.3s ease;
  text-align: left;
  background: rgba(30, 30, 30, 0.3);
  border-radius: 12px;
  backdrop-filter: blur(10px);
`;



const CompanyName = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: #8B0000;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  line-height: 1.2;
`;

const JobTitle = styled.h4`
  font-size: 1.4rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.8rem;
  text-transform: capitalize;
  line-height: 1.3;
`;

const JobDuration = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #8B0000;
  font-size: 0.95rem;
  margin-bottom: 0.8rem;
  font-weight: 500;
  opacity: 0.9;
`;

const JobLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #8B0000;
  font-size: 0.95rem;
  margin-bottom: 1.2rem;
  font-weight: 500;
  opacity: 0.9;
`;

const CompanyLink = styled.a`
  color: #8B0000;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #ffffff;
  }
`;

const JobDescription = styled.div`
  margin-top: 1.2rem;
  transition: all 0.3s ease;
  max-height: ${props => props.expanded ? '500px' : '0'};
  overflow: hidden;
  opacity: ${props => props.expanded ? '1' : '0'};
  transform: ${props => props.expanded ? 'translateY(0)' : 'translateY(-10px)'};

  ul {
    margin: 0;
    padding-left: 0;
    color: #d0d0d0;
    line-height: 1.6;
    list-style: none;
  }

  li {
    margin-bottom: 0.7rem;
    font-size: 1rem;
    line-height: 1.5;
  }
`;

const ExpandButton = styled.button`
  background: #8B0000;
  border: none;
  color: #ffffff;
  padding: 0.7rem 1.3rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s ease;
  margin-top: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.3px;

  &:hover {
    background: #ffffff;
    color: #8B0000;
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(139, 0, 0, 0.3);
  }
`;

const ShowMoreButton = styled.button`
  background: transparent;
  border: 2px solid #8B0000;
  color: #8B0000;
  padding: 1rem 2rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  margin: 2rem auto;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &:hover {
    background: #8B0000;
    color: #ffffff;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(139, 0, 0, 0.3);
  }
`;

const Experience = () => {
  const [animatedElements, setAnimatedElements] = useState([]);
  const [expandedItems, setExpandedItems] = useState({});
  const sectionRef = useRef(null);

  const toggleExpanded = (index) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const experiences = [
    {
      company: "Freelance",
      title: "Security Contractor",
      duration: "Feb 2025 - Present",
      location: "Remote",
      description: [
        "Specializing in offensive security and penetration testing for various clients",
        "Conducting comprehensive vulnerability assessments and security audits",
        "Performing web application, network, and infrastructure penetration testing",
        "Delivering detailed reports with actionable remediation recommendations",
        "Working with diverse technologies including cloud platforms and containerized environments"
      ],
      link: "https://www.upwork.com/freelancers/~01784d6d495e8e71ce?mp_source=share"
    },
    {
      company: "Veltris",
      title: "Security Engineer",
      duration: "May 2024 - Present",
      location: "Remote",
      description: [
        "Implementing and maintaining security controls across enterprise infrastructure",
        "Conducting security assessments and vulnerability management",
        "Collaborating with development teams on secure coding practices",
        "Monitoring and responding to security incidents and threats",
        "Contributing to security policy development and compliance initiatives"
      ],
      link: "https://www.veltris.com/"
    },
    {
      company: "Future Netwings Solutions Pvt. Ltd",
      title: "SOC Trainee",
      duration: "Dec 2022 - May 2024",
      location: "Bangalore, India",
      description: [
        "Monitored security events and alerts using SIEM tools and security monitoring platforms",
        "Investigated and responded to security incidents in real-time",
        "Conducted threat hunting and analysis of suspicious activities",
        "Maintained and updated security playbooks and response procedures",
        "Collaborated with incident response teams for threat containment and eradication"
      ],
      link: "https://futurenetwings.com/"
    },
    {
      company: "Mahindra Defence",
      title: "Intern",
      duration: "Oct 2021 - Nov 2021",
      location: "Bangalore, India",
      description: [
        "Assisted in security assessments of defense systems and infrastructure",
        "Learned about industrial security protocols and defense industry standards",
        "Participated in security awareness training and documentation",
        "Gained exposure to military-grade security requirements and compliance"
      ],
      link: null
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elementId = entry.target.dataset.elementId;
            if (elementId) {
              setAnimatedElements(prev => [...prev, elementId]);
            }
          } else {
            // Reset animation when element goes out of view
            const elementId = entry.target.dataset.elementId;
            if (elementId) {
              setAnimatedElements(prev => prev.filter(id => id !== elementId));
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    // Observe section title and subtitle
    if (sectionRef.current) {
      const title = sectionRef.current.querySelector('[data-element-id="title"]');
      const subtitle = sectionRef.current.querySelector('[data-element-id="subtitle"]');
      
      if (title) observer.observe(title);
      if (subtitle) observer.observe(subtitle);
    }

    // Observe timeline items
    const timelineItems = document.querySelectorAll('[data-element-id^="timeline-"]');
    timelineItems.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <ExperienceSection id="experience" ref={sectionRef}>
      <ExperienceContainer>
        <SectionTitle 
          data-element-id="title"
          className={animatedElements.includes('title') ? 'animate' : ''}
        >
          Where I've Worked
        </SectionTitle>
        
        <SectionSubtitle 
          data-element-id="subtitle"
          className={animatedElements.includes('subtitle') ? 'animate' : ''}
        >
          My professional journey in cybersecurity and security engineering
        </SectionSubtitle>

        <TimelineContainer>
          {experiences.map((exp, index) => (
            <TimelineItem 
              key={index}
              data-element-id={`timeline-${index}`}
              className={animatedElements.includes(`timeline-${index}`) ? 'animate' : ''}
            >
              <TimelineDot className="timeline-dot" />
              <TimelineContent className="timeline-content">
                <CompanyName>
                  <FaBriefcase />
                  {exp.link ? (
                    <CompanyLink href={exp.link} target="_blank" rel="noopener noreferrer">
                      {exp.company}
                      <FaExternalLinkAlt style={{ fontSize: '0.8rem', marginLeft: '0.5rem' }} />
                    </CompanyLink>
                  ) : (
                    <span>{exp.company}</span>
                  )}
                </CompanyName>
                
                <JobTitle>{exp.title}</JobTitle>
                
                <JobDuration>
                  <FaCalendarAlt />
                  {exp.duration}
                </JobDuration>
                
                <JobLocation>
                  <FaMapMarkerAlt />
                  {exp.location}
                </JobLocation>
                
                <ExpandButton onClick={() => toggleExpanded(index)}>
                  {expandedItems[index] ? 'Show Less' : 'Show Details'}
                </ExpandButton>
                
                <JobDescription expanded={expandedItems[index]}>
                  <ul>
                    {exp.description.map((item, descIndex) => (
                      <li key={descIndex}>{item}</li>
                    ))}
                  </ul>
                </JobDescription>
              </TimelineContent>
            </TimelineItem>
          ))}

        </TimelineContainer>
      </ExperienceContainer>
    </ExperienceSection>
  );
};

export default Experience;
