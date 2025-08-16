import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';

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
  transition: all 0.8s ease;

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
  transition: all 0.8s ease 0.2s;

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
  margin-bottom: 4rem;
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s ease;

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
      left: calc(50% - 15px);

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
  background: rgba(30, 30, 30, 0.8);
  border: 1px solid rgba(139, 0, 0, 0.3);
  border-radius: 12px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(139, 0, 0, 0.6);
    box-shadow: 0 20px 40px rgba(139, 0, 0, 0.2);
  }
`;

const CompanyName = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const JobTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  color: #8B0000;
  margin-bottom: 1rem;
`;

const JobDuration = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #9e9e9e;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const JobLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #9e9e9e;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
`;

const JobDescription = styled.ul`
  color: #bdbdbd;
  line-height: 1.6;
  margin: 0;
  padding-left: 1.2rem;
`;

const JobDescriptionItem = styled.li`
  margin-bottom: 0.5rem;
  position: relative;

  &::marker {
    color: #8B0000;
  }
`;

const CompanyLink = styled.a`
  color: #8B0000;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #ffffff;
  }
`;

const Experience = () => {
  const [animatedElements, setAnimatedElements] = useState([]);
  const sectionRef = useRef(null);

  const experiences = [
    {
      company: "Veltris",
      title: "Security Engineer",
      duration: "May 2024 - Present",
      location: "Remote",
      description: [
        "Created and fine-tuned SIEM, EDR use cases for optimized threat detection and response",
        "Worked on critical vulnerabilities on assets, categorizing them by severity & infra/dev and setting SLA for timely remediation",
        "Responded to on-call security alerts by performing initial triage, investigating potential threats, and escalating incidents as needed",
        "Collaborated with vendors on troubleshooting tools issues",
        "Created multiple Dashboard to improve monitoring matrix around security check",
        "Fine-tuned Web Application Firewall (WAF) rules based on real-world traffic analysis",
        "Administered Splunk Cloud for log aggregation, detection engineering, dashboarding, and alert optimization",
        "Led alert reviews to ensure SOP adherence, delivered feedback to analysts, and identified training needs across SOC teams",
        "Developed and maintained precise SOPs and security documentation",
        "Collaborated with DevOps to secure CI/CD pipelines and enforce least privilege in AWS & containerized environments",
        "Performed custom threat hunting, IOC integration, and automated threat blocklisting using Python and n8n workflows",
        "Created and enforced security policies used by clients in production environments",
        "Conducted 3rd-party risk assessments, evaluating employee app access requests",
        "Participated in organizational FedRAMP migrations",
        "Worked with the internal red team to exploit CI/CD misconfigurations",
        "Conducted security audits to identify and mitigate risks",
        "Assisted with internal phishing simulations and hosted employee awareness sessions",
        "Used reconnaissance tools (Amass, Nmap, Nuclei) to map internet-facing assets",
        "Wrote Bash and Python scripts to automate asset checks, security tests, and vulnerability assessments",
        "Led dashboard development for security control, user activity monitoring for insider threat and phishing mail attempts matrix"
      ],
      link: "#"
    },
    {
      company: "Future Netwings Solutions Pvt. Ltd",
      title: "SOC Analyst",
      duration: "Dec 2022 - May 2024",
      location: "Bangalore, India",
      description: [
        "Operated in a 24/7 rotational shift to monitor, investigate, and mitigate security incidents",
        "Conducted log analysis and maintenance to ensure effective real-time monitoring and response",
        "Investigated and resolved escalated security incidents, collaborating with L2 teams for deeper analysis and remediation",
        "Documented incidents with root-cause analysis",
        "Followed IR playbooks for common threats",
        "Generated daily/weekly SOC reports with metrics (alert volumes, false positives)"
      ],
      link: "#"
    },
    {
      company: "Mahindra Defence",
      title: "Intern",
      duration: "Oct 2021 - Nov 2021",
      location: "Bangalore, India",
      description: [
        "Collaborated with engineering and contributing to Research & Development, and documentation efforts",
        "Assisted in drafting technical reports, presentations, and manuals",
        "Follow up with different departments to ensure smooth progress on assigned tasks",
        "Handled sensitive and confidential information with professionalism",
        "Be proactive, organized, and open to taking on small but meaningful responsibilities",
        "Prepare presentations and summaries for internal meetings"
      ],
      link: "#"
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
                  <CompanyLink href={exp.link} target="_blank" rel="noopener noreferrer">
                    {exp.company}
                    <FaExternalLinkAlt style={{ fontSize: '0.8rem', marginLeft: '0.5rem' }} />
                  </CompanyLink>
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
                
                <JobDescription>
                  {exp.description.map((item, itemIndex) => (
                    <JobDescriptionItem key={itemIndex}>
                      {item}
                    </JobDescriptionItem>
                  ))}
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
